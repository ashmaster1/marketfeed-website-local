import React from 'react';

import Icons from '../Icons';
import {
  Container,
  LeftDescription,
  Main,
  MissionVision,
  RightContainer,
  Social,
  SocialRow,
} from './style';
import { dataPush } from '@/utils/gtm';

const AboutUsLanding = props => {
  return (
    <Main>
      <Container>
        <LeftDescription>
          <div className='boldText'>Who we are</div>
          <div className='tradeDescription'>
            marketfeed started out in 2020 with a mission to democratise the
            stock market for all Indians. Our wild ambitions to ensure
            #tradingforall has pushed us to build cutting-edge applications and
            platforms that are set to redefine the trading experience for
            investors and traders.
          </div>
          <SocialRow>
            <Social
              onClick={() => {
                dataPush('mf_social_link_click', {
                  event_action: 'Click Link',
                  event_label: 'Youtube',
                  position: 'about_us',
                });
                window.open(
                  'https://www.youtube.com/@marketfeedbyShariqueSamsudheen/channels'
                );
              }}
            >
              <Icons name='youtube' width={36} height={36} alt={'youtube'} />
              <div className='socialDescription'>
                <span className='socialCount'>1.5M</span>
                <span className='socialName'>YouTube Subscribers</span>
              </div>
            </Social>
            <Social
              onClick={() => {
                dataPush('mf_social_link_click', {
                  event_action: 'Click Link',
                  event_label: 'Linkedin',
                  position: 'about us',
                });
                window.open(
                  'https://www.linkedin.com/company/marketfeedapp/mycompany/verification/?viewAsMember=true'
                );
              }}
            >
              <Icons
                name='linkedInSmall'
                width={36}
                height={36}
                alt={'linkedIn'}
              />
              <div className='socialDescription'>
                <span className='socialCount'>7.9K</span>
                <span className='socialName'>LinkedIn Members</span>
              </div>
            </Social>
            <Social
              onClick={() => {
                dataPush('mf_social_link_click', {
                  event_action: 'Click Link',
                  event_label: 'Instagram',
                  position: 'about us',
                });
                window.open('https://www.instagram.com/marketfeed.app/');
              }}
            >
              <Icons
                name='instagram'
                width={36}
                height={36}
                alt={'instagram'}
              />
              <div className='socialDescription'>
                <span className='socialCount'>65.4K</span>
                <span className='socialName'>Instagram Followers</span>
              </div>
            </Social>
          </SocialRow>
        </LeftDescription>
        <RightContainer>
          <div className='imageRow'>
            <div className='imageColumn1'>
              <img
                className='image1'
                src='https://marketfeed-app.gumlet.io/marketfeed-website/aboutlanding1.png'
              />
            </div>
            <div className='imageColumn2'>
              <img
                className='image2'
                src='https://marketfeed-app.gumlet.io/marketfeed-website/aboutlanding2.png'
              />
              <img
                className='image3'
                src='https://marketfeed-app.gumlet.io/marketfeed-website/aboutlanding3.png'
              />
            </div>
          </div>
        </RightContainer>
      </Container>
      <MissionVision>
        <div className='mission'>
          <span className='head'>Mission</span>
          <span className='desc'>
            Our mission is to make trading possible and profitable for everyone,
            irrespective of their experience level!
          </span>
        </div>
        <div className='vision'>
          <span className='head'>Vision</span>
          <span className='desc'>
            Help people make a regular income from the stock market, Build
            India's largest community of financially independent & responsible
            individuals.
          </span>
        </div>
      </MissionVision>
    </Main>
  );
};

export default AboutUsLanding;
