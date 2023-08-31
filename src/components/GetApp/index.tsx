import { dataPush } from '@/utils/gtm';

import { Card, Container, Left, Right } from './style';
import { deviceType } from 'react-device-detect';

const GetApp = () => {
  return (
    <Container id={'get-app'}>
      <Card>
        <Left>
          <h2 className='title'>Get marketfeed App</h2>
          <span className='subtitle'>
            Access exclusive trading strategies from <br /> SEBI Registered
            Research Analysts!
          </span>
          <div className='storeRow'>
            <a
              id='mf_app_play_store'
              target='_blank'
              onClick={() => {
                dataPush('mf_app_click', {
                  event_action: 'Click Link',
                  event_label: 'Play Store',
                  position: 'center',
                });
              }}
              href='https://get.marketfeed.app/8GbT/frl4ekko'
            >
              <img src='https://marketfeed-app.gumlet.io/marketfeed-website/gplay-logo.png' />
            </a>
            <a
              id='mf_app_app_store'
              target='_blank'
              onClick={() => {
                dataPush('mf_app_click', {
                  event_action: 'Click Link',
                  event_label: 'App Store',
                  position: 'center',
                });
              }}
              href='https://get.marketfeed.app/8GbT/bb640t7b'
            >
              <img src='https://marketfeed-app.gumlet.io/marketfeed-website/appstore-logo.png' />
            </a>
          </div>
          <span className='desc'>
            4.4 ⭐️ Ratings in Play Store & App Store
          </span>
        </Left>
        <Right>
          <img src='https://marketfeed-app.gumlet.io/marketfeed-website/OR-Code.png' />
          <div className='desc'>Scan QR Code</div>
        </Right>
      </Card>
    </Container>
  );
};

export default GetApp;
