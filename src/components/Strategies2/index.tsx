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

const Strategies2 = ({
  deviceType,
  communityPerformanceMetaList,
}: {
  deviceType: String;
  communityPerformanceMetaList: Array;
}) => {
  return (
    <Container>
      <Title>
      Our Featured Strategies
      </Title>
      <SubTitle>Strategies are powered by SEBI Research Analysts</SubTitle>
      <SubContainer>
        <Strategy
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
                  communityPerformanceMetaList[0].last30DaysPnlPercentage}
                %
              </span>
              <Icons
                name={
                  Math.sign(
                    communityPerformanceMetaList[0].last30DaysPnlPercentage
                  ) > 0
                    ? 'trendup'
                    : 'trenddown'
                }
                width={'22px'}
                height={'12px'}
                alt={'trendup'}
              />
            </span>
            <span className='description'>* Return till now</span>
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
                  communityPerformanceMetaList[1].last30DaysPnlPercentage}
                %
              </span>
              <Icons
                name={
                  Math.sign(
                    communityPerformanceMetaList[1]?.last30DaysPnlPercentage
                  ) > 0
                    ? 'trendup'
                    : 'trenddown'
                }
                width={'22px'}
                height={'12px'}
                alt={'trendup'}
              />
            </span>
            <span className='description'>* Return till now</span>
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
      <Warning>*Past performance is not a guarantee of future results</Warning>
    </Container>
  );
};

export default Strategies2;
