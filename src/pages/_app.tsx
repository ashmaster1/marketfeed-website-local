import '@/styles/globals.css';
import './font.css';

import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { toast, ToastContainer } from 'react-toastify';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import HeaderFullWidth from '@/components/HeaderFullWidth';
import JoinWorkshopMobile from '@/components/JoinWorkshopMobile';
import Theme from '@/constants/theme';
import { getUtmParams } from '../utils/getUtmParams';
import { removeNullAndUndefined } from '@/utils/removeNullAndUndefined';
import { formatWorkshopMeta } from '@/utils/formatWorkshopMeta';
import Marquee from '@/components/Marquee'
import AOS from "aos";
import "aos/dist/aos.css";
import { isMobile } from 'react-device-detect';
import HeaderGetApp from '@/components/HeaderGetApp';
const JoinWorkshopModal = dynamic(
  () => import('@/components/JoinWorkshopModal')
);

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
  }
  body, html {
    margin: 0;
    padding: 0;
    background: #000000;;
    font-size: 100%;
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: Satoshi-Variable;
    font-variant-ligatures: no-common-ligatures;
    scroll-padding-top: 100px;
    overflow-x: hidden;
    color: #fff;
    .grecaptcha-badge { 
      visibility: hidden;
    }
    
  }
  input{
    color: #fff;
  }
  #__next{
    margin: 0;
    height: 100%;
    width: 100vw;
  }
  h1,h2,h3,h4,p,span{
    margin: 0;
    font-display:swap;
  }
  a {
    text-decoration: none;
  }
  :root {
    --PhoneInput-color--focus: #000;
    --PhoneInputInternationalIconPhone-opacity: 0.8;
    --PhoneInputInternationalIconGlobe-opacity: 0.65;
    --PhoneInputCountrySelect-marginRight: 0.35em;
    --PhoneInputCountrySelectArrow-width: 0.3em;
    --PhoneInputCountrySelectArrow-marginLeft: var(--PhoneInputCountrySelect-marginRight);
    --PhoneInputCountrySelectArrow-borderWidth: 1px;
    --PhoneInputCountrySelectArrow-opacity: 0.45;
    --PhoneInputCountrySelectArrow-color: inherit;
    --PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);
    --PhoneInputCountrySelectArrow-transform: rotate(45deg);
    --PhoneInputCountryFlag-aspectRatio: 1.5;
    --PhoneInputCountryFlag-height: 1em;
    --PhoneInputCountryFlag-borderWidth: 1px;
    --PhoneInputCountryFlag-borderColor: rgba(0,0,0,0.5);
    --PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);
    --PhoneInputCountryFlag-backgroundColor--loading: rgba(0,0,0,0.1);
  }
  
  .PhoneInput {
    /* This is done to stretch the contents of this component. */
    display: flex;
    align-items: center;
  }
  
  .PhoneInputInput {
    /* The phone number input stretches to fill all empty space */
    flex: 1;
    /* The phone number input should shrink
       to make room for the extension input */
    min-width: 0;
  }
  
  .PhoneInputCountryIcon {
    width: calc(var(--PhoneInputCountryFlag-height) * var(--PhoneInputCountryFlag-aspectRatio));
    height: var(--PhoneInputCountryFlag-height);
  }
  
  .PhoneInputCountryIcon--square {
    width: var(--PhoneInputCountryFlag-height);
  }
  
  .PhoneInputCountryIcon--border {
      box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor),
      inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor);
  }
  
  .PhoneInputCountryIconImg {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  .PhoneInputInternationalIconPhone {
    opacity: var(--PhoneInputInternationalIconPhone-opacity);
  }
  
  .PhoneInputInternationalIconGlobe {
    opacity: var(--PhoneInputInternationalIconGlobe-opacity);
  }
  
  
  .PhoneInputCountry {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    margin-right: var(--PhoneInputCountrySelect-marginRight);
  }
  
  .PhoneInputCountrySelect {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    border: 0;
    opacity: 0;
    cursor: pointer;
  }
  
  .PhoneInputCountrySelect[disabled] {
    cursor: default;
  }
  
  .PhoneInputCountrySelectArrow {
      display: block;
      content: '';
      width: var(--PhoneInputCountrySelectArrow-width);
      height: var(--PhoneInputCountrySelectArrow-width);
      margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
      border-style: solid;
      border-color: var(--PhoneInputCountrySelectArrow-color);
      border-top-width: 0;
      border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);
      border-left-width: 0;
      border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);
      transform: var(--PhoneInputCountrySelectArrow-transform);
      opacity: var(--PhoneInputCountrySelectArrow-opacity);
    }
  
    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
      opacity: 1;
      color: var(--PhoneInputCountrySelectArrow-color--focus);
    }
  
    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
      box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus),
        inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus);
    }
  
    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon .PhoneInputInternationalIconGlobe {
      opacity: 1;
      color: var(--PhoneInputCountrySelectArrow-color--focus);
    }

  `;

export default function App({ Component, pageProps }: AppProps) {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showRegistrationMobile, setShowRegistrationMobile] = useState(false);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop');
  const [workshopEventMeta, setWorkShopEventMeta] = useState({});
  const [isAppScanModalVisible, setIsAppScanModalVisible] = useState(false)

  useEffect(() => {
    if(!isMobile){
      setDeviceType('desktop')
    }
    else{
      setDeviceType('mobile')
    }
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-cubic',
      delay: 0,
      offset: 0,
      throttleDelay: 99
    });
    AOS.refresh();
  }, []);
  

  const submitRegistrationForm = ({ name, email, phone, snackBarRequired }) => {
    const utmParams = getUtmParams();
    const { language, date, duration } = formatWorkshopMeta(workshopEventMeta);

    let newContact = removeNullAndUndefined({
      'First name':
        name.split(' ')[0] === '' ? name.split(' ')[1] : name.split(' ')[0],
      'Last name': name.split(' ')[1],
      Name: name,
      Email: email,
      Mobile: phone,
      'Original medium': utmParams.medium,
      'Created from medium': utmParams.medium,
      'Marketfeed Source': 'MARKETFEED_WEBSITE',
      Source: utmParams.source,
      'Original source': utmParams.source,
      'Created from source': utmParams.source,
      'Original campaign': utmParams.campaign,
      'Created through campaign': utmParams.campaign,
      'Lifecycle stage': 'Lead - Form 1',
      Status: 'Form 1 Submitted',
      'F1 Date': date || null,
      'F1 Time': duration || null,
      'F1 Language': language || null,
      Language: language || null,
      'Form 1 Submitted?': 'Yes',
    });

    let identifier = newContact.Mobile;

    window.fwcrm.identify(identifier, newContact);

    var currentTime = new Date().toISOString();
    setRegistrationCompleted(false);
    setLoading(true);

    grecaptcha.ready(function () {
      grecaptcha
        .execute('6Lfr8wcmAAAAACg9HYxh-bMggFX91jx0SZ3wukGH', {
          action: 'submit',
        })
        .then(function (token) {
          // Add your logic to submit to your backend server here.
          axios
            .post(`${process.env.NEXT_PUBLIC_BASEURL}/lead-management/lead`, {
              name: name,
              mobile: phone,
              email: email,
              addedTime: currentTime,
              marketfeedSource: 'MARKETFEED_WEBSITE',
              utmSource: query.utm_source ? query.utm_source : '',
              utmTerm: query.utm_term ? query.utm_term : '',
              utmContent: query.utm_content ? query.utm_content : '',
              utmMedium: query.utm_medium ? query.utm_medium : '',
              utmCampaign: query.utm_campaign ? query.utm_campaign : '',
              referrerName: query.referrer ? query.referrer : document.referrer,
            })
            .then(function (response) {
              if (response.status === 200) {
                setRegistrationCompleted(true);
                if (snackBarRequired) {
                  toast.success('Registered Successfully!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
                history.pushState(null, null, '#thank-you');
                setLoading(false);
              } else {
                throw new Error(response.data.message);
              }
            })
            .catch(function (error) {
              console.log(error);
              error.data.message.map(item => {
                console.log(item);
              });
            });
        });
    });
  };
  const { query } = useRouter();

  return (
    <>
      <Head>
        <script src='//in.fw-cdn.com/31228659/578718.js' chat='false'></script>
        <script defer src='https://www.google-analytics.com/analytics.js' />
        <script src='https://www.google.com/recaptcha/api.js?render=6Lfr8wcmAAAAACg9HYxh-bMggFX91jx0SZ3wukGH'></script>
      </Head>
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6ZRH47');`,
        }}
      ></Script>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Marquee setShowRegistration={() => setShowRegistration(true)}/>
        <HeaderFullWidth
          type='HOME'
          deviceType={deviceType}
          showRegistration={showRegistration}
          closeModal={() => setShowRegistration(false)}
          setShowRegistration={() => setShowRegistration(true)}
          // openConsultationModal={() => joinWorkshopModalVisible(true)}
          openAppScanModal={() => {setIsAppScanModalVisible(true)}}
        />
        <>
          <Component
            {...{
              ...pageProps,
              showRegistration: showRegistration,
              query,
              registrationCompleted: registrationCompleted,
              openAppScanModal: () => {setIsAppScanModalVisible(true)},
              setMobileRegistrationPopup: value => {
                if (
                  value &&
                  !showRegistrationMobile &&
                  sessionStorage.getItem('workshopMobilePopup') !== 'closed'
                ) {
                  setShowRegistrationMobile(true);
                } else if (!value && showRegistrationMobile) {
                  setShowRegistrationMobile(false);
                }
              },
              showRegistrationMobile: showRegistrationMobile,
              setShowRegistration: value => setShowRegistration(value),
              submitRegistrationForm: ({
                name,
                email,
                phone,
                snackBarRequired,
              }) =>
                submitRegistrationForm({
                  name,
                  email,
                  phone,
                  snackBarRequired,
                }),
              loading: loading,
              setWorkShopEventMeta: setWorkShopEventMeta,
              passDeviceType: value => setDeviceType(value),
              setShowRegistrationFormParent: value =>
                setShowRegistration(value),
            }}
          />

          <JoinWorkshopModal
            showRegistrationModal={showRegistration}
            closeModal={() => {
              setShowRegistration(false);
              setRegistrationCompleted(false);
            }}
            submitRegistrationForm={({
              name,
              email,
              phone,
              snackBarRequired,
            }) => {
              submitRegistrationForm({ name, email, phone, snackBarRequired });
            }}
            registrationCompleted={registrationCompleted}
            loading={loading}
            workshopEventMeta={workshopEventMeta}
          />
          <JoinWorkshopMobile
            showRegistrationMobile={showRegistrationMobile}
            deviceType={deviceType}
            closeModal={() => {
              window.sessionStorage.setItem('workshopMobilePopup', 'closed');
              setShowRegistrationMobile(false);
            }}
            setShowRegistration={() => {
              window.sessionStorage.setItem('workshopMobilePopup', 'closed');
              setShowRegistrationMobile(false);
              setShowRegistration(true);
            }}
          />
          {isAppScanModalVisible && <HeaderGetApp openAppScanModal={() => {setIsAppScanModalVisible(false)}}/> }
        </>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}
