import { dataPush } from '@/utils/gtm';

import Products from '../Products';
import { Container, Cta, ImageContainer, Step, Title, WorkFlow } from './style';
import Icons from '../Icons';

const HowItWorks2 = ({
  deviceType,
  showRegistrationModal,
}: {
  deviceType: String;
  showRegistrationModal: Function;
}) => {
  return (
    <Container>
      <Title>How to Get Started</Title>
      <WorkFlow>
        {
          deviceType === 'desktop' ? (<svg className='path' xmlns="http://www.w3.org/2000/svg" width="720" height="2" viewBox="0 0 720 2" fill="none">
          <path d="M0 1H720" stroke="white" stroke-opacity="0.3" stroke-dasharray="8 8"/>
          </svg>) : (
            <svg className='path' xmlns="http://www.w3.org/2000/svg" width="390" height="2" viewBox="0 0 390 2" fill="none">
            <path d="M0 1L390 1.00003" stroke="white" stroke-opacity="0.3" stroke-dasharray="8 8"/>
            </svg>
          )
        }
      

        <Step>
          <ImageContainer>
            <Icons
              name='step21'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>1</div>
          </ImageContainer>
          <span className='stepTitle'>
            Register
          </span>
          <span className='stepDesc'>
          Register for Workshop to {deviceType==='mobile' && <br></br>} understanding our offering
          </span>
        </Step>
        <Step>
          <ImageContainer>
            <Icons
              name='step22'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>2</div>
          </ImageContainer>
          <span className='stepTitle'>
            Connect
          </span>
          <span className='stepDesc'>
          Attend workshop, and our {deviceType==='mobile' && <br></br>} team will guide you further.
          </span>
        </Step>
        <Step>
          <ImageContainer>
            <Icons
              name='step23'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>
              3
            </div>
          </ImageContainer>
          <span className='stepTitle'>
            Automate
          </span>
          <span className='stepDesc'>
          Set up your broker {deviceType==='mobile' && <br></br>}
(IIFL Securities) account and {deviceType==='mobile' && <br></br>} activate automation.
          </span>
        </Step>
      </WorkFlow>
      <Cta
        id='mf_register_workshop_center'
        onClick={() => {
          dataPush('mf_register_workshop_click', {
            event_action: 'Button Click',
            event_label: 'Join Workshop',
            position: 'center',
          });
          showRegistrationModal();
        }}
      >
        <span>Get Started</span>
      </Cta>
    </Container>
  );
};

export default HowItWorks2;
