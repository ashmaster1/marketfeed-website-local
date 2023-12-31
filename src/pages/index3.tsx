import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import GetApp from '@/components/GetApp';
import HowItWorks from '@/components/HowItWorks';
import LandingScreen from '@/components/LandingScreen';
import { Loader } from '@/components/Loader';
import Strategies from '@/components/Strategies';
import Testimonials from '@/components/Testimonials';
import UpcomingEvents from '@/components/UpcomingEvents';
import { getCommunityPerformanceListById } from '@/utils/helper';

import {
  getGlobalCommunityMeta,
  getMinimumCapitalForCommunities,
  getLatestWorkshopEventMeta,
} from '../lib/db-admin';
import { CommunityPerformanceMeta } from '../models/communityPerformanceMeta';

export async function getServerSideProps(context: any) {
  const workshopEventMeta: any = await getLatestWorkshopEventMeta();

  const globalCommunityMeta: any = await getGlobalCommunityMeta();

  const communityIdList: string[] = [
    'ejBHnqGtR8gQjeTWfQkj',
    'fEz4cPLRv16OKsgk1S30',
  ];

  const communityMinimumCapitalObject = await getMinimumCapitalForCommunities(
    communityIdList
  );

  const communityPerformanceMetaList = getCommunityPerformanceListById(
    globalCommunityMeta,
    communityIdList,
    communityMinimumCapitalObject
  );

  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return {
    props: {
      communityPerformanceMetaList: communityPerformanceMetaList,
      workshopEventMeta: workshopEventMeta,
      deviceType: isMobile ? 'mobile' : 'desktop',
    },
  };
}

export default function Home({
  communityPerformanceMetaList,
  deviceType,
  showRegistration,
  query,
  submitRegistrationForm,
  registrationCompleted,
  loading,
  setShowRegistrationFormParent,
  passDeviceType,
  setShowRegistration,
  setMobileRegistrationPopup,
  showRegistrationMobile,
  workshopEventMeta,
  setWorkShopEventMeta,
}: {
  communityPerformanceMetaList: CommunityPerformanceMeta[];
  passDeviceType: Function;
  deviceType: String;
  showRegistration: Boolean;
  query: any;
  setShowRegistrationFormParent: Function;
  submitRegistrationForm: Function;
  registrationCompleted: Boolean;
  loading: Boolean;
  setShowRegistration: Function;
  setMobileRegistrationPopup: Function;
  showRegistrationMobile: Boolean;
  setWorkShopEventMeta: Function;
  workshopEventMeta: Object;
}) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setWorkShopEventMeta(workshopEventMeta);
  }, []);

  useEffect(() => {
    passDeviceType(deviceType);
  }, []);
  return (
    <>
      {isLoading ? <Loader /> : null}
      <Head>
        <title>marketfeed. - Trading Made Simple</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        {/* <HeaderFullWidth
            type='HOME'
            openConsultationModal={() => joinWorkshopModalVisible(true)}
            openAppScanModal={() => setIsAppScanModalVisible(true)}
            showRegistrationModal={() => setShowRegistration(true)}
          /> */}
        <LandingScreen
          deviceType={deviceType}
          submitRegistrationForm={submitRegistrationForm}
          registrationCompleted={registrationCompleted}
          showRegistration={showRegistration}
          loading={loading}
          workshopEventMeta={workshopEventMeta}
          showRegistrationModal={() => setShowRegistration(true)}
          setMobileRegistrationPopup={value =>
            setMobileRegistrationPopup(value)
          }
          showRegistrationMobile={showRegistrationMobile}
        />

        <Strategies
          deviceType={deviceType}
          showRegistrationModal={() => setShowRegistration(true)}
          communityPerformanceMetaList={communityPerformanceMetaList}
        />

        <UpcomingEvents
          deviceType={deviceType}
          showRegistrationModal={() => setShowRegistration(true)}
          workshopEventMeta={workshopEventMeta}
        />
        {/* <Testimonials deviceType={deviceType} /> */}
        <Faq
          deviceType={deviceType}
          communityPerformanceMetaList={communityPerformanceMetaList}
        />
        <GetApp />
        <Footer />

        <ToastContainer />
      </>
    </>
  );
}
