import { useEffect, useState } from 'react';

import Head from 'next/head';

import AboutUsLanding from '@/components/AboutUsLanding';
import Footer from '@/components/Footer';
import Investors from '@/components/Investors';
import { Loader } from '@/components/Loader';
import MeetTheTeam from '@/components/MeetTheTeam';
import Values from '@/components/Values';
import GetApp from '@/components/GetApp';

import {
  getGlobalCommunityMeta,
  getMinimumCapitalForCommunities,
  getLatestWorkshopEventMeta,
} from '../lib/db-admin';
import { getCommunityPerformanceListById } from '@/utils/helper';

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

export default function About({
  passDeviceType,
  deviceType,
  setWorkShopEventMeta,
  workshopEventMeta,
}: {
  passDeviceType: Function;
  deviceType: String;
  setWorkShopEventMeta: Function;
  workshopEventMeta: Object;
}) {
  const [showRegistrationModal, setShowRegistration] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    passDeviceType(deviceType);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setWorkShopEventMeta(workshopEventMeta);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <Head>
        <title>marketfeed. - Trading Made Simple</title>
        <meta name='description' content="Discover marketfeed's story, mission, and vision! Learn how we're dedicated to serving you." />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AboutUsLanding />
      <MeetTheTeam />
      <Values deviceType={deviceType} />
      <Investors deviceType={deviceType} />
      <GetApp deviceType={deviceType} />
      <Footer />
    </>
  );
}
