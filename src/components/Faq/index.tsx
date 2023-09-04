import { useState } from 'react';

import { dataPush } from '@/utils/gtm';

import Icons from '../Icons';
import {
  Container,
  Cta,
  CtaGhost,
  Desc,
  FaqAns,
  FaqContainer,
  FaqItem,
  FaqQuestion,
  SubTitle,
  SupportTime,
  SupportWrapper,
  Title,
  Wrapper,
} from './style';
import { isMobileOnly } from 'react-device-detect';

const faqDetails: any = [
  {
    question: 'What is marketfeed?',
    ans: "marketfeed is your gateway to wealth creation through the stock market. We offer SEBI Registered Analysts' trading strategies that help maximize returns while keeping you in control of your funds. These strategies can be automated in your own broker's account [IIFL Securities].",
  },
  {
    question: 'What is the minimum capital to start trading?',
    ans: 'A minimum capital of Rs 2.4 lakh is all you need to begin trading on marketfeed, with no upper limits. This amount grants you access to our expert trading strategies, aimed at maximizing your investment potential.',
  },
  {
    question: 'Are the returns guaranteed? Is there any risk to my capital?',
    ans: 'No, returns are not guaranteed. The strategies aim to maximize returns with controlled risks, but the stock market and trading carry inherent risks, and outcomes may vary based on market conditions. ',
  },
  {
    question: 'Is my investment safe with marketfeed?',
    ans: 'Yes, your investment is secure. Your funds are held in your own broker’s account, giving you control and peace of mind.',
  },
  {
    question: 'Can I pause or stop trading at any time?',
    ans: 'Absolutely, you have full control. You can start or stop trading at your convenience, by just informing our support team. Your funds are always accessible, and there are no lock-in periods. Keep in mind that longer-term commitments can often yield more significant benefits in the market.',
  },
];
const Faq = ({
  deviceType,
  communityPerformanceMetaList,
}: {
  deviceType: String;
  communityPerformanceMetaList: Array;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Container>
      <Title data-aos='fade-up'>FAQ</Title>
      <Wrapper data-aos={isMobileOnly ? 'fade-up' : 'fade-right'}>
        <FaqContainer id='mf_faq_container'>
          {faqDetails.map((item: any, index: any) => {
            return (
              <FaqItem id='mf_faq_item' key={index}>
                <FaqQuestion
                  id='mf_faq_question'
                  active={activeIndex === index}
                  onClick={() => {
                    dataPush('mf_faq_click', {
                      event_action: 'Button Click',
                      faq_text: item.question,
                    });
                    index === activeIndex
                      ? setActiveIndex(-1)
                      : setActiveIndex(index);
                  }}
                >
                  {item.question}
                  <Icons
                    id='mf_faq_icon'
                    name={activeIndex === index ? 'minus' : 'plus'}
                  />
                </FaqQuestion>
                <FaqAns
                  className={activeIndex === index ? 'active' : ''}
                  active={activeIndex === index}
                >
                  {item.ans}
                </FaqAns>
              </FaqItem>
            );
          })}
          <FaqItem id='mf_faq_item'>
            <FaqQuestion
              id='mf_faq_question'
              active={activeIndex === 5}
              onClick={() => {
                dataPush('mf_faq_click', {
                  event_action: 'Button Click',
                  faq_text: 'What is the minimum capital required?',
                });
                5 === activeIndex ? setActiveIndex(-1) : setActiveIndex(5);
              }}
            >
              What is the minimum capital required?
              <Icons
                id='mf_faq_icon'
                name={activeIndex === 5 ? 'minus' : 'plus'}
              />
            </FaqQuestion>
            <FaqAns
              className={activeIndex === 5 ? 'active' : ''}
              active={activeIndex === 5}
            >
              Each strategy has a minimum capital based on risk allocation,
              trading style, and possible drawdowns. The minimum capital for
              following Smart Money trades is{' '}
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
              .
            </FaqAns>
          </FaqItem>
        </FaqContainer>
        <SupportWrapper data-aos={isMobileOnly ? 'fade-up' : 'fade-left'}>
          <div>
            <SubTitle>
              Have more {deviceType === 'mobile' && <br />} questions?
              {deviceType === 'desktop' && <br />} Let’s talk
            </SubTitle>
            <Desc>
              Chat with us on WhatsApp & clear all your{' '}
              {deviceType === 'mobile' && <br />} doubts!{' '}
              {deviceType === 'desktop' && <br />} You can also drop us an
              email!
            </Desc>
          </div>
          <div>
            <Cta
              id='mf_cta_chat_support'
              onClick={() => {
                window.open(
                  ' https://wa.me/919847181078?text=Hi%2C%0AI%20need%20help%20with%20marketfeed%20trading%20strategies'
                );
                dataPush('mf_cta_click', {
                  event_action: 'Button Click',
                  event_label: 'Contact Support',
                  position: 'left_faq',
                });
              }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 2C17.5229 2 22 6.47708 22 12C22 17.5229 17.5229 22 12 22C10.23 22 8.56875 21.5383 7.12625 20.7317L2.0975 21.8567L3.37708 17.0629C2.50333 15.5775 2 13.8479 2 12C2 6.47708 6.47708 2 12 2ZM16.1329 15.0233C16.3083 14.5363 16.3083 14.1192 16.2537 14.0308C16.2004 13.9462 16.0621 13.8942 15.8504 13.7896C15.6388 13.685 14.6021 13.1796 14.4075 13.1108C14.2158 13.0421 14.0737 13.0062 13.9354 13.2154C13.7933 13.4246 13.3908 13.8946 13.2654 14.0312C13.1437 14.1717 13.0217 14.1879 12.81 14.0833C12.5983 13.9787 11.9183 13.76 11.1129 13.0487C10.4862 12.4975 10.0637 11.8154 9.94167 11.6067C9.81958 11.3979 9.92833 11.2837 10.0337 11.1792C10.1296 11.0879 10.2454 10.9379 10.3508 10.8171C10.4529 10.6929 10.4892 10.6079 10.5588 10.4675C10.6317 10.3308 10.595 10.2067 10.5425 10.1021C10.49 9.9975 10.0804 8.96667 9.89208 8.55542C9.73417 8.20958 9.56833 8.19958 9.41667 8.19625C9.29375 8.19 9.15167 8.19 9.01333 8.19C8.87125 8.19 8.64333 8.24167 8.44917 8.45083C8.25833 8.66 7.71333 9.16292 7.71333 10.1908C7.71333 11.215 8.46625 12.2075 8.57208 12.3442C8.67792 12.4846 10.0308 14.6575 12.1767 15.4929C13.9558 16.185 14.3192 16.0479 14.7087 16.0121C15.0962 15.9792 15.9575 15.5092 16.1329 15.0233Z'
                  fill='black'
                />
              </svg>
              Let&apos;s chat
            </Cta>
            <CtaGhost
              id='mf_cta_email_support'
              onClick={() =>
                dataPush('mf_cta_click', {
                  event_action: 'Button Click',
                  event_label: 'Contact Support',
                  position: 'left_faq',
                })
              }
              href={`mailto:support@marketfeed.com?subject=marketfeed.com trader support&body=Hi,%20I%20need%20help%20with%20marketfeed%20trading%20strategies.`}
            >
              <svg
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.5 6.26297V5.75C2.5 5.41848 2.6317 5.10054 2.86612 4.86612C3.10054 4.6317 3.41848 4.5 3.75 4.5H21.25C21.5815 4.5 21.8995 4.6317 22.1339 4.86612C22.3683 5.10054 22.5 5.41848 22.5 5.75V6.26297L12.5 12.513L2.5 6.26297ZM12.8313 13.7802C12.7319 13.8422 12.6171 13.875 12.5 13.875C12.3829 13.875 12.2681 13.8422 12.1687 13.7802L2.5 7.73703V18.25C2.5 18.5815 2.6317 18.8995 2.86612 19.1339C3.10054 19.3683 3.41848 19.5 3.75 19.5H21.25C21.5815 19.5 21.8995 19.3683 22.1339 19.1339C22.3683 18.8995 22.5 18.5815 22.5 18.25V7.73703L12.8313 13.7802Z' />
              </svg>
              Write to us
            </CtaGhost>
            <SupportTime>
              We are available Mon-Sat between{' '}
              {deviceType === 'desktop' && <br />} 10 AM to 6 PM
            </SupportTime>
          </div>
        </SupportWrapper>
      </Wrapper>
    </Container>
  );
};

export default Faq;
