import { dataPush } from '@/utils/gtm';

import {
  Card,
  Container,
  Left,
} from './style';

const HeaderGetApp = (props) => {
  return (
    <Container onClick={() => props.openAppScanModal(false)}>
      <Card>
        <Left>
          <h2 className='title'>Get marketfeed App</h2>
          <div className='storeRow'>
            <a id="mf_app_play_store" target='_blank'
            onClick={() => {
              dataPush('mf_app_click', {event_action: 'Click Link', event_label: 'Play Store', position: 'center'})
            }}
             href='https://get.marketfeed.app/8GbT/frl4ekko'>
              <img src='https://marketfeed-app.gumlet.io/marketfeed-website/playstore-marketfeed.png?width=235' />
            </a>
            <a id="mf_app_app_store" target='_blank'
            onClick={() => {
              dataPush('mf_app_click', {event_action: 'Click Link', event_label: 'App Store', position: 'center'})
            }}
             href='https://get.marketfeed.app/8GbT/bb640t7b'>
              <img src='https://marketfeed-app.gumlet.io/marketfeed-website/appstore-marketfeed.png?width=235' />
            </a>
          </div>
          <span className='desc'>
            4.4 ⭐️ Ratings in <br/> Play Store & App Store
          </span>
        </Left>
      </Card>
    </Container>
  );
};

export default HeaderGetApp;
