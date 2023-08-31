import { dataPush } from '@/utils/gtm';

import Products from '../Products';
import { Container, Cta, ImageContainer, Step, Title, WorkFlow } from './style';
import Icons from '../Icons';

const HowItWorks = ({
  deviceType,
  showRegistrationModal,
}: {
  deviceType: String;
  showRegistrationModal: Function;
}) => {
  return (
    <Container>
      <Products deviceType={deviceType} />
      <Title>How does it work?</Title>
      <WorkFlow>
        <svg
          className='path'
          width='970'
          height='428'
          viewBox='0 0 970 428'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M161 1H834.75C908.894 1 969 61.1058 969 135.25V135.25C969 209.394 908.894 269.5 834.75 269.5H80C36.3695 269.5 1 304.87 1 348.5V348.5C1 392.13 36.3695 427.5 80 427.5H795'
            stroke='white'
            stroke-opacity='0.3'
            stroke-dasharray='8 8'
          />
        </svg>

        <Step>
          <ImageContainer>
            <Icons
              name='step1'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>1</div>
          </ImageContainer>
          <span className='stepTitle'>
            Attend 30 min <br /> workshop
          </span>
          <span className='stepDesc'>
            to get exclusive access to the {deviceType === 'desktop' && <br />}{' '}
            world of QuickTrade
          </span>
        </Step>
        <Step>
          <ImageContainer>
            <Icons
              name='step2'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>2</div>
          </ImageContainer>
          <span className='stepTitle'>
            Select the <br /> backtested strategy
          </span>
          <span className='stepDesc'>
            from our list, as per your {deviceType === 'desktop' && <br />}
            capital and expected return
          </span>
        </Step>
        <Step>
          <ImageContainer>
            <Icons
              name='step3'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>
              <span>3</span>
            </div>
          </ImageContainer>
          <span className='stepTitle'>
            Login with <br />
            your broker
          </span>
          <span className='stepDesc'>
            and connect with marketfeed. {deviceType === 'desktop' && <br />}{' '}
            Funds stay with your broker!
          </span>
        </Step>
        <Step>
          <ImageContainer>
            <Icons
              name='step4'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>
              <span>4</span>
            </div>
          </ImageContainer>
          <span className='stepTitle'>
            Allocate <br /> strategy capital
          </span>
          <span className='stepDesc'>
            in multiples of minimum {deviceType === 'desktop' && <br />} amount!
          </span>
        </Step>
        <Step>
          <ImageContainer>
            <Icons
              name='step5'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>
              <span>5</span>
            </div>
          </ImageContainer>
          <span className='stepTitle'>
            Turn on <br />
            trade alerts
          </span>
          <span className='stepDesc'>
            to receive on-time trades {deviceType === 'desktop' && <br />}{' '}
            directly to WhatsApp
          </span>
        </Step>
        <Step>
          <ImageContainer>
            <Icons
              name='step6'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo'>
              <span>6</span>
            </div>
          </ImageContainer>
          <span className='stepTitle'>
            Trade with a <br />
            Single Click!
          </span>
          <span className='stepDesc'>
            save your time and trade with {deviceType === 'desktop' && <br />}{' '}
            zero skills & knowledge
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
        <span>Register for Workshop</span>
      </Cta>
    </Container>
  );
};

export default HowItWorks;
