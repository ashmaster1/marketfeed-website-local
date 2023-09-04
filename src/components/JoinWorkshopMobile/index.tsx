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
            Join our interactive clear more doubts about<br/> Automated Trading
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
