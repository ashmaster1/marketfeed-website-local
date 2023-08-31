import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { isMobileOnly } from 'react-device-detect';

// import { trackEvent } from "../../utils/events";
import { dataPush } from '../../utils/gtm';
import HeaderJoinWorkshop from '../HeaderJoinWorkshop';
import Icons from '../Icons';
import {
  Button,
  CloseButton,
  Container,
  Drawer,
  NavBar,
  Row,
  Section,
} from './style';

function HeaderFullWidth(props: any) {
  const [device, setDevice] = useState('');
  const [fill, setFill] = useState('none');
  const [widthSize, setWidthSize] = useState('');
  const [heightSize, setheightSize] = useState('');
  const [color, setColor] = useState('none');
  const [programURL, setProgramURL] = useState();
  const router = useRouter();
  const [logoColor, setLogoColor] = useState('#170439');
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerExpanded, setExpandDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (isOpen) {
      if (html) {
        html.style.overflow = 'hidden';
      }
    } else {
      if (html) {
        html.style.overflow = 'scroll';
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (device === 'desktop') {
      setWidthSize('190');
      setheightSize('49');
    } else {
      setWidthSize('150');
      setheightSize('30');
    }
  }, [device]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (window.innerWidth > 767) {
      setDevice('desktop');
    } else {
      setDevice('mobile');
    }
  }, []);

  const bookFreeConsultationClick = () => {
    if (isMobileOnly) {
      window.open('https://get.marketfeed.app/8GbT/cb8a5790');
    } else {
      window.open('https://app.marketfeed.com');
    }
  };

  useEffect(() => {
    setProgramURL(props.programURL);
  }, [props]);

  // const onClickHandler = () => {
  //   if (props.type == 'DETAILS_PAGE') {
  //     if (Object.keys(router.query).length) {
  //       let url = new URL(props.programURL);
  //       Object.keys(router.query).map((key, index) => {
  //         url.searchParams.append(key, router.query[key]);
  //         if (key === 'utm_source') {
  //           url.searchParams.append('coupon', router.query[key]);
  //         }
  //       });
  //       window.open(url.href);
  //     } else {
  //       window.open(props.programURL);
  //     }

  //     // trackEvent("CTA", {
  //     //   "Creator name": props?.mentorName || "",
  //     //   "Creator ID": props?.mentorId || "",
  //     //   "Program ID": props?.programId || "",
  //     //   "Clicked from": "Header",
  //     //   "CTA type": "Enroll Now",
  //     // });
  //   } else {
  //     props.openConsultationModal();
  //   }
  // };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      document.getElementById('header').classList.add('scroll');
      setColor('#ffffffef');
      if (window.scrollY > 3900) {
        setLogoColor('#fff');
      } else {
        setLogoColor('#170439');
      }
    } else {
      setLogoColor('#170439');
      document.getElementById('header').classList.remove('scroll');
      setColor('none');
    }

    // if (window.scrollY > 0) {
    //   document.getElementById("header").classList.add("scroll");
    //   setColor("#ffffffef");
    //   if (
    //     (window.scrollY > 485 && window.scrollY < 1250) ||
    //     (window.scrollY > 2925 && props.type === "DETAILS_PAGE")
    //   ) {
    //     document.getElementById("headerCTA").classList.add("active");
    //     setFill("#ffff");
    //   } else if (props.type === "DETAILS_PAGE") {
    //     document.getElementById("headerCTA").classList.remove("active");
    //     setFill("none");
    //   }
    // } else {
    //   setLogoColor("#170439");
    //   document.getElementById("header").classList.remove("scroll");
    //   setColor("none");
    // }
  };

  const NavigationBar = () => (
    <div className='navigationMobile'>
      <Link
        href={'/about-us'}
        onClick={() => {
          setIsOpen(false);
          dataPush('mf_menu_click', {
            event_action: 'Click Link',
            event_label: 'About Us',
          });
        }}
      >
        About
      </Link>
      <div className='seperator' />
      <Link
        href='https://app.marketfeed.com'
        onClick={() => {
          setIsOpen(false);
          dataPush('mf_menu_click', {
            event_action: 'Click Link',
            event_label: 'App Login',
          });
        }}
      >
        Login
      </Link>
      <div className='seperator' />
      <Link
        onClick={() => {
          device === 'mobile' ? null : props.openAppScanModal();
          dataPush('mf_menu_click', {
            event_action: 'Click Link',
            event_label: 'Marketfeed App',
          });
        }}
        id='mf_menu_get_marketfeed_app'
        href={
          device === 'mobile'
            ? 'https://get.marketfeed.app/8GbT/cb8a5790'
            : 'javascript:void(0);'
        }
      >
        Get marketfeed App
      </Link>
      <HeaderJoinWorkshop
        isOpen={isOpen}
        setJoinWorkshop={() => {
          props.setShowRegistration(true);
          dataPush('mf_register_workshop_click', {
            event_action: 'Button Click',
            event_label: 'Join Workshop',
            position: 'top_nav',
          });
        }}
      />
    </div>
  );
  return (
    <Section>
      <Container showBanner={false} transparent={props.transparent} id='header'>
        {device == 'desktop' ? (
          <>
            {props.type === 'DETAILS_PAGE' ? (
              <a rel='noopener noreferrer' className='logo' href={'/'}>
                <Icons
                  name='marketfeedUniversityLogo'
                  width={widthSize}
                  height={heightSize}
                  alt={'marketfeed Logo'}
                  fill={'#fff'}
                />
              </a>
            ) : (
              <a
                href={'https://marketfeed.com/'}
                rel='noopener noreferrer'
                target={'_blank'}
                className='logo'
              >
                <Icons
                  name='marketfeedUniversityLogo'
                  width={widthSize}
                  height={heightSize}
                  alt={'marketfeed Logo'}
                  fill={'#fff'}
                />
              </a>
            )}
            <Row>
              <NavBar logoColor={logoColor} className='nav-list'>
                <a
                  id='mf_menu_about-us'
                  href={'/about-us'}
                  onClick={() =>
                    dataPush('mf_menu_click', {
                      event_action: 'Click Link',
                      event_label: 'About Us',
                    })
                  }
                >
                  <span>About Us</span>
                  <span className='c-button_line'></span>
                </a>
                <a
                  onClick={() => {
                    dataPush('mf_menu_click', {
                      event_action: 'Click Link',
                      event_label: 'Marketfeed App',
                    });
                  }}
                  id='mf_menu_get_marketfeed_app'
                  href={
                    device === 'mobile'
                      ? 'https://get.marketfeed.app/8GbT/cb8a5790'
                      : '#get-app'
                  }
                >
                  <span>Get marketfeed App</span>
                  <span className='c-button_line'></span>
                </a>

                <a
                  id='mf_menu'
                  href='https://app.marketfeed.com/'
                  onClick={() =>
                    dataPush('mf_menu_click', {
                      event_action: 'Click Link',
                      event_label: 'App Login',
                    })
                  }
                >
                  <span>Login</span>
                  <span className='c-button_line'></span>
                </a>
              </NavBar>
              <NavBar width={device === 'mobile' ? '60' : '90'}>
                <Button
                  id='mf_register_workshop_top'
                  onClick={() => {
                    props.setShowRegistration(true);
                    dataPush('mf_register_workshop_click', {
                      event_action: 'Button Click',
                      event_label: 'Join Workshop',
                      position: 'top_nav',
                    });
                  }}
                >
                  <span style={{ marginRight: 10 }}>Get Started</span>{' '}
                  <Icons name='arrow' color={'#ffc400'} />
                </Button>
              </NavBar>
            </Row>
          </>
        ) : (
          <>
            <div className='headerWrapper'>
              <a
                href={'https://marketfeed.com/'}
                rel='noopener noreferrer'
                className='logo'
              >
                <Icons
                  name='marketfeedUniversityLogo'
                  width={widthSize}
                  height={heightSize}
                  alt={'marketfeed Logo'}
                  fill={'#fff'}
                />
              </a>
              <CloseButton>
                <div className='menu cross menu--1'>
                  <label>
                    <input type='checkbox' checked={isOpen} />
                    <svg
                      viewBox='0 0 100 100'
                      xmlns='http://www.w3.org/2000/svg'
                      onClick={() => toggleDrawer()}
                    >
                      <circle cx='50' cy='50' r='30' />
                      <path
                        className='line--1'
                        d='M0 40h62c13 0 6 28-4 18L35 35'
                      />
                      <path className='line--2' d='M0 50h70' />
                      <path
                        className='line--3'
                        d='M0 60h62c13 0 6-28-4-18L35 65'
                      />
                    </svg>
                  </label>
                </div>
              </CloseButton>
            </div>
            {
              <Drawer id='drawer' isOpen={isOpen}>
                <NavigationBar />
              </Drawer>
            }
          </>
        )}
      </Container>
    </Section>
  );
}

export default HeaderFullWidth;
