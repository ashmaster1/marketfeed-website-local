import { Container, SubTitle, Title, FeaturesContainer, Cta } from "./style";
import Icons from '../Icons/index'
import { deviceType, isDesktop, isMobile, isMobileOnly, isTablet } from "react-device-detect";
import { dataPush } from "@/utils/gtm";

const Features = (props) => {
  return (
    <Container>
      <Title data-aos="fade-up">
        Supercharge your {isMobileOnly && <br/>} portfolio {(!isMobileOnly) && <br/>}
        with {isMobileOnly && <br/>} Automated Trading.
      </Title>
      <SubTitle data-aos="fade-up" data-aos-delay="500">Invest in high return, high risk trading portfolios</SubTitle>
      <FeaturesContainer>
        <div className="feature" data-aos="flip-down">
          <div className="feature-icon">
            <Icons name='brain' />
          </div>
          <div className="right">
            <span className="feature-title">Curated Trading Strategies</span>
            <span className="feature-subtitle">
              Strategies designed to maximise returns while keeping risks in
              check
            </span>
          </div>
        </div>
        <div className="feature" data-aos="flip-down" >
          <div className="feature-icon">
          <Icons name='flag' />
          </div>
          <div className="right">
            <span className="feature-title">Start with just ₹2.4 Lakhs</span>
            <span className="feature-subtitle">
              Dive in with an initial investment of just ₹2.4 lakhs, with no
              upper limit
            </span>
          </div>
        </div>
        <div className="feature" data-aos="flip-down" >
          <div className="feature-icon">
          <Icons name='chart' />
          </div>
          <div className="right">
            <span className="feature-title">
              Trades automated in own account
            </span>
            <span className="feature-subtitle">
              Effortless automation, with funds always in your own broker’s
              account
            </span>
          </div>
        </div>
      </FeaturesContainer>
      <Cta id='mf_register_workshop_center'
        onClick={() => {
          dataPush('mf_register_workshop_click', {
            event_action: 'Button Click',
            event_label: 'Join Workshop',
            position: 'center',
          });
          props.showRegistrationModal();
        }}> 
        <span>Get Started</span>
    </Cta>
    </Container>
  );
};

export default Features;
