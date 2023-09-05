import { isMobileOnly } from 'react-device-detect';
import Icons from '../Icons';
import { Container, Item, ItemColumn, ItemRow, Title } from './style';

const Testimonials = ({ deviceType }: { deviceType: String }) => {
  return (
    <Container>
      <Title data-aos='fade-up'>
        Hear from our {isMobileOnly && <br></br>} happy users
      </Title>
      <ItemRow>
        <ItemColumn data-aos={isMobileOnly ? 'fade-up' : 'fade-right'}>
          <Item type={'left'}>
            <span
              style={{
                marginBottom: deviceType === 'desktop' ? '20px' : '0px',
                alignSelf: 'flex-start',
                position: 'relative',
              }}
            >
              <Icons
                className={'quotes'}
                name='quotes'
                width={'80px'}
                height={'80px'}
                alt={'quotes'}
              />
            </span>
            <div className='ratingReview'>
              <span>
                Thanks to marketfeed and Smart Money, I no longer have to worry
                about studying technical analysis or thinking about my trades.
                This has freed up so much of my time, allowing me to sit back
                and relax while my money works for me.
              </span>
              <div className='icon-container'>
                <Icons
                  name='rating5star'
                  width={'144px'}
                  height={'24px'}
                  alt={'5 star'}
                />
              </div>
            </div>
            <div className='ratedUser'>
              <Icons name='user1' alt={'quotes'} />
              <div className='userDetails'>
                <span className='designation'>User Since</span>
                <span className='name'>Feb 2023</span>
              </div>
            </div>
          </Item>
        </ItemColumn>
        <ItemColumn data-aos={isMobileOnly ? 'fade-up' : 'fade-left'}>
          <Item type={'right'}>
            <div className='ratingReview'>
              <span>
              Trade automation with marketfeed is perfect for working-class and business people who don't have the time or knowledge to trade. They've enabled me to participate in the market with confidence, without having to worry about the technicalities of trading.
              </span>
              <div className='icon-container'>
                <Icons
                  name='rating'
                  width={'144px'}
                  height={'24px'}
                  alt={'4star'}
                />
              </div>
            </div>
            <div className='ratedUser'>
              <Icons name='user2' alt={'quotes'} />
              <div className='userDetails'>
                <span className='designation'>User Since</span>
                <span className='name'>Feb 2023</span>
              </div>
            </div>
          </Item>
          <Item type={'right'}>
            <div className='ratingReview'>
              <span>
                I used to feel anxious about trading due to my lack of
                knowledge, but with marketfeed, all it takes is a single click
                to get started with advanced trading. I highly recommend it to
                anyone who's interested in trading but doesn't know where to
                start.
              </span>
              <div className='icon-container'>
                <Icons
                  name='rating5star'
                  width={'144px'}
                  height={'24px'}
                  alt={'5 star'}
                />
              </div>
            </div>
            <div className='ratedUser'>
              <Icons name='user3' alt={'quotes'} />
              <div className='userDetails'>
                <span className='designation'>User Since</span>
                <span className='name'>Jan 2023</span>
              </div>
            </div>
          </Item>
        </ItemColumn>
      </ItemRow>
    </Container>
  );
};

export default Testimonials;
