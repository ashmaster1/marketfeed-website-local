import { deviceType } from 'react-device-detect';
import { Container, Factor, Factors } from './style';
import Icons from '../Icons';

const TrustFactors = ({ deviceType }: { deviceType: String }) => {
  return (
    <Container>
      <Factors>
        <Factor>
          <img src='https://marketfeed-app.gumlet.io/marketfeed-website/shield.png' />
          <div className='content'>
            SEBI {deviceType === 'mobile' && <br />} Registered RAs
          </div>
        </Factor>
        <Factor>
          <img src='https://marketfeed-app.gumlet.io/marketfeed-website/yc.png' />
          <div className='content'>
            Backed{deviceType === 'mobile' && <br />} by Y-Combinator
          </div>
        </Factor>
        <Factor>
          <img src='https://marketfeed-app.gumlet.io/marketfeed-website/youtube.png' />
          <div className='content'>
            Over 1.5M {deviceType === 'mobile' && <br />}Followers
          </div>
        </Factor>
        <Factor>
          <Icons name='appDownload' />
          <div className='content'>
            200K+ App {deviceType === 'mobile' && <br />}Downloads
          </div>
        </Factor>
      </Factors>
    </Container>
  );
};

export default TrustFactors;
