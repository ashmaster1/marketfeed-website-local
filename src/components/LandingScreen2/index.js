import React, { useEffect, useRef } from 'react';

import JoinWorkshopForm from '../JoinWorkshopForm';
import TrustFactors from '../TrustFactors';
import { Container, LeftDescription, RightForm, Wrapper } from './style';

const LandingScreen2 = ({
  deviceType,
  submitRegistrationForm,
  registrationCompleted,
  showRegistration,
  loading,
  showRegistrationMobile,
  setMobileRegistrationPopup,
  workshopEventMeta,
  showRegistrationModal,
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (deviceType === 'mobile') {
      window.addEventListener('scroll', x => {
        if (
          window.scrollY >
          formRef?.current?.offsetTop + formRef?.current?.offsetHeight
        ) {
          if (!showRegistrationMobile) {
            setMobileRegistrationPopup(true);
          }
        } else {
          setMobileRegistrationPopup(false);
        }
      });
    }

    () =>
      window.addEventListener('scroll', x => {
        if (
          window.scrollY >
          formRef.current.offsetTop + formRef.current.offsetHeight
        ) {
          console.log('Passed form');
        }
      });
  }, []);
  return (
    <>
      <Wrapper>
        <Container>
          <LeftDescription data-aos='fade-right'>
            {/* <div className='topText'>TRADING MADE SIMPLE</div> */}
            <div className='boldText'>
              Exclusive <br></br>high return <br></br>investments
            </div>
            {/* <div className='tradeDescription'>
              Strategies that you can execute{' '}
              {deviceType === 'mobile' && <br></br>} in a single click!
            </div> */}
            <div className='tradeDescription'>once reserved for the wealthiest, <br></br>
available to you now</div>
          </LeftDescription>
          <RightForm ref={formRef} data-aos='fade-left'>
            <JoinWorkshopForm
              submitRegistrationForm={submitRegistrationForm}
              registrationCompleted={registrationCompleted}
              showRegistration={showRegistration}
              loading={loading}
              workshopEventMeta={workshopEventMeta}
              showRegistrationModal={showRegistrationModal}
            />
          </RightForm>
        </Container>
        <TrustFactors data-aos='zoom-in' deviceType={deviceType} />
      </Wrapper>
    </>
  );
};

export default LandingScreen2;
