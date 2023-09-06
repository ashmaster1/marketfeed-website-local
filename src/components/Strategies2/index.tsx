import { dataPush } from '@/utils/gtm';

import Icons from '../Icons';
import {
  Container,
  Cta,
  Details,
  Highlight,
  Strategy,
  SubContainer,
  SubTitle,
  Title,
  Warning,
} from './style';
import { isMobile, isMobileOnly } from 'react-device-detect';
import formatWorkshopDate from '@/utils/fomatWorkshopDate';

const Strategies2 = ({
  deviceType,
  communityPerformanceMetaList,
}: {
  deviceType: String;
  communityPerformanceMetaList: Array;
}) => {
  return (
    <Container>
      <Title data-aos="fade-up">
      Our Featured Strategies
      </Title>
      <SubTitle data-aos="fade-up" data-aos-delay="500">Strategies are powered by SEBI Research Analysts</SubTitle>
      <SubContainer>
        <Strategy
        data-aos={isMobile ? 'flip-down' : "fade-right"}
        data-aos-delay={isMobile ? '500' : '500'}
          type={'sm'}
          onMouseEnter={() =>
            dataPush('mf_strategies_hover_view', {
              event_label: 'Hover View',
              event_action: 'Smart Money',
            })
          }
        >
          <Details type={'title'}>
            <span className='title'>Smart Money</span>
            <span className='subtitle'>NIFTY50 Weekly Option Selling</span>
          </Details>
          <Details>
            <span className='returns'>
              <span style={{ marginRight: '10px' }}>
                {communityPerformanceMetaList &&
                  Math.ceil(communityPerformanceMetaList[0].totalPnlPercentage).toFixed(1)}
                %
              </span>
              <Icons
                name={
                  Math.sign(
                    communityPerformanceMetaList[0].totalPnlPercentage
                  ) > 0
                    ? 'trendup'
                    : 'trenddown'
                }
                width={'22px'}
                height={'12px'}
                alt={'trendup'}
              />
            </span>
            <span className='description'>* Returns since April 28th, 2023</span>
          </Details>
          {/* <Details>
            <span className='returns'>
              <span style={{ marginRight: '10px' }}>
                +
                {communityPerformanceMetaList &&
                  communityPerformanceMetaList[0].minimumCapital.toLocaleString(
                    'en-IN',
                    {
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                      style: 'currency',
                      currency: 'INR',
                    }
                  )}
              </span>
            </span>
            <span className='description'>Minimum capital</span>
          </Details> */}
        </Strategy>
        <Strategy
        data-aos={isMobile ? 'flip-down' : "fade-left"}
        data-aos-delay={isMobile ? '200' : '500'}
          type={'pb'}
          onMouseEnter={() =>
            dataPush('mf_strategies_hover_view', {
              event_label: 'Hover View',
              event_action: 'Piggy Bank',
            })
          }
        >
          <Details type={'title'}>
            <span className='title'>Piggy Bank</span>
            <span className='subtitle'>BANKNIFTY Weekly Option Selling</span>
          </Details>
          <Details>
            <span className='returns'>
              <span style={{ marginRight: '10px' }}>
                {communityPerformanceMetaList &&
                  Math.ceil(communityPerformanceMetaList[1].totalPnlPercentage).toFixed(1)}
                %
              </span>
              <Icons
                name={
                  Math.sign(
                    communityPerformanceMetaList[1]?.totalPnlPercentage
                  ) > 0
                    ? 'trendup'
                    : 'trenddown'
                }
                width={'22px'}
                height={'12px'}
                alt={'trendup'}
              />
            </span>
            <span className='description'>* Returns since April 28th, 2023</span>
          </Details>
          {/* <Details>
            <span className='returns'>
              <span style={{ marginRight: '10px' }}>
                +
                {communityPerformanceMetaList.length &&
                  communityPerformanceMetaList[1].minimumCapital.toLocaleString(
                    'en-IN',
                    {
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                      style: 'currency',
                      currency: 'INR',
                    }
                  )}
              </span>
            </span>
            <span className='description'>Minimum capital</span>
          </Details> */}
        </Strategy>
      </SubContainer>
      <Warning data-aos='fade-up'>*Past performance is not a guarantee of future results</Warning>
    </Container>
  );
};

export default Strategies2;
