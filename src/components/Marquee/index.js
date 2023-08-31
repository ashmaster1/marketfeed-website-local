import { MarqueeContainer, MarqueeChildren } from "./style";
import Icons from '../Icons/index'
const Child = () => {
  return (
    <MarqueeChildren>
        <Icons name='marqueeStar' />
      <div className="child">
        <span>Join our interactive sessions to gain insights </span>
      </div>
      <Icons name='marqueeStar' />
      <div className="child">
        <span>Next workshop starts Sunday, August 23, 2023</span>
      </div>
      <Icons name='marqueeStar' />
      <div className="child" style={{color: '#FFC400'}}>
        <span>Register for Free Workshop</span>
      </div>
    </MarqueeChildren>
  );
};
const Marquee = () => {
  return (
    <MarqueeContainer>
      <div className="marquee">
        {<Child/>}
        {<Child/>}
      </div>
      <div className="marquee">
        {<Child/>}
        {<Child/>}
      </div>
    </MarqueeContainer>
  );
};

export default Marquee;
