import React from 'react';

import Icons from '../Icons';
import { Close, Container, Cta, Desc, PopUpContainer } from './style';

const JoinWorkshopMobile = ({
  deviceType,
  closeModal,
  showRegistrationMobile,
  setShowRegistration,
}: {
  showRegistrationMobile: Boolean;
  deviceType: String;
  closeModal: Function;
  setShowRegistration: Function;
}) => {
  return (
    <>
      {showRegistrationMobile && (
        <Container>
          <PopUpContainer>
            <Desc>
              SEBI Registered RAs send recommendations <br />
              to you. Accept it with just a single click!
            </Desc>
            <Cta onClick={() => setShowRegistration()}>
              Register for Workshop
            </Cta>
          </PopUpContainer>
          <Close onClick={() => closeModal()}>
            <Icons
              name='close'
              width={deviceType === 'mobile' ? '20' : '36'}
              height={deviceType === 'mobile' ? '20' : '36'}
              fill={deviceType === 'mobile' ? '#000' : 'white'}
            />
          </Close>
        </Container>
      )}
    </>
  );
};

export default JoinWorkshopMobile;
