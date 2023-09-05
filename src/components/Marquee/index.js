import { MarqueeContainer, MarqueeChildren } from "./style";
import { dataPush } from "@/utils/gtm";
import formatWorkshopDate from "@/utils/fomatWorkshopDate";
import Icons from '../Icons/index'
const Child = ({date}) => {
  return (
    <MarqueeChildren>
        <Icons name='marqueeStar' />
      <div className="child">
        <span>Join our interactive sessions to gain insights </span>
      </div>
      <Icons name='marqueeStar' />
      <div className="child">
        <span>Next workshop starts {date}</span>
      </div>
      <Icons name='marqueeStar' />
      <div className="child" style={{color: '#FFC400'}}>
        <span>Register for Free Workshop</span>
      </div>
    </MarqueeChildren>
  );
};
const Marquee = (props) => {
  let {formattedDate, startTime, endTime} = formatWorkshopDate(props.workshopEventMeta.eventDate);
  return (
    <MarqueeContainer id='mf_register_workshop_top'
    onClick={() => {
      props.setShowRegistration(true);
      dataPush('mf_register_workshop_click', {
        event_action: 'Button Click',
        event_label: 'Join Workshop',
        position: 'top_nav',
      });
    }}>
      <div className="marquee">
        {<Child date={formattedDate}/>}
        {<Child date={formattedDate}/>}
      </div>
      <div className="marquee">
        {<Child date={formattedDate}/>}
        {<Child date={formattedDate}/>}
      </div>
    </MarqueeContainer>
  );
};

export default Marquee;
