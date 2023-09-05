import { dataPush } from '@/utils/gtm';

import Products from '../Products';
import { Container, Cta, ImageContainer, Step, Title, WorkFlow } from './style';
import Icons from '../Icons';
import { isMobileOnly } from 'react-device-detect';
import { useEffect, useState } from 'react';

const HowItWorks2 = ({
  deviceType,
  showRegistrationModal,
}: {
  deviceType: String;
  showRegistrationModal: Function;
}) => {
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);
  const [opacity3, setOpacity3] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', (e) => lineIncrease(e));

    return () => window.addEventListener('scroll', (e) => lineIncrease(e));
  })

  const lineIncrease = (e) => {
    if(!isMobileOnly){
      const line = document.getElementById('line');
      const container = document.getElementById('cont');
      const {y} = container?.getBoundingClientRect();
      let offsetY = window.innerHeight-y-400;
      var scrollSlow  = (offsetY / 3);
      let w = Math.min(Math.max(scrollSlow, 0), 70);

      if(w>1){
        if(!opacity1) setOpacity1(1);
      }
      if(w>25){
        if(!opacity2) setOpacity2(1);
      }
      if(w>55){
        if(!opacity3) setOpacity3(1);
      }
  
      if(w<1){
        if(opacity1) setOpacity1(0);
      }
      if(w<25){
        if(opacity2) setOpacity2(0);
      }
      if(w<55){
        if(opacity3) setOpacity3(0);
      }
      line.style.width = w + "%";
    }
    
  }
  return (
    <Container id={'cont'}>
      <Title data-aos='fade-up'>How to Get Started</Title>
      <WorkFlow data-aos='fade-up'>
        {/* {
          deviceType === 'desktop' ? (<svg className='path' xmlns="http://www.w3.org/2000/svg" width="720" height="2" viewBox="0 0 720 2" fill="none">
          <path d="M0 1H720" stroke="white" stroke-opacity="0.3" stroke-dasharray="8 8"/>
          </svg>) : (
            <svg className='path' xmlns="http://www.w3.org/2000/svg" width="390" height="2" viewBox="0 0 390 2" fill="none">
            <path d="M0 1L390 1.00003" stroke="white" stroke-opacity="0.3" stroke-dasharray="8 8"/>
            </svg>
          )
        } */}
       {isMobileOnly ? null :  <div className='dotted'/>}
        {isMobileOnly ? null : <div className='line' id='line'/>}

        <Step data-aos={isMobileOnly ? 'flip-down' : null}>
          <ImageContainer>
            <Icons
              name='step21'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo' style={{opacity: opacity1}}>1</div>
          </ImageContainer>
          <span className='stepTitle'>
            Register
          </span>
          <span className='stepDesc'>
          Register for Workshop {deviceType === 'desktop' && <br></br>} to {deviceType==='mobile' && <br></br>} understanding our offering
          </span>
        </Step>
        <Step data-aos={isMobileOnly ? 'flip-down' : null} >
          <ImageContainer>
            <Icons
              name='step22'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo' style={{opacity: opacity2}}>2</div>
          </ImageContainer>
          <span className='stepTitle'>
            Connect
          </span>
          <span className='stepDesc'>
          Attend workshop, {deviceType === 'desktop' && <br></br>} and our {deviceType==='mobile' && <br></br>} team will guide you further.
          </span>
        </Step>
        <Step data-aos={isMobileOnly ? 'flip-down' : null} >
          <ImageContainer>
            <Icons
              name='step23'
              width={deviceType === 'mobile' ? 36 : 72}
              height={deviceType === 'mobile' ? 36 : 72}
            />
            <div className='stepNo' style={{opacity: opacity3}}>
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
