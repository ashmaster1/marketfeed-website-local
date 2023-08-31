import React, { useEffect, useRef } from 'react';

import JoinWorkshopForm from '../JoinWorkshopForm';
import TrustFactors from '../TrustFactors';
import { Container, LeftDescription, RightForm, Wrapper } from './style';

const LandingScreen = ({
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
          <LeftDescription>
            {/* <div className='topText'>TRADING MADE SIMPLE</div> */}
            <div className='boldText'>
              No extra work, <br></br>just extra income!
            </div>
            {/* <div className='tradeDescription'>
              Strategies that you can execute{' '}
              {deviceType === 'mobile' && <br></br>} in a single click!
            </div> */}
            <div className='aumCount'>₹135 Crores+</div>
            <div className='tradeDescription'>deployed by marketfeed users</div>
          </LeftDescription>
          <RightForm ref={formRef}>
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
        <TrustFactors deviceType={deviceType} />
      </Wrapper>
    </>
  );
};

export default LandingScreen;
