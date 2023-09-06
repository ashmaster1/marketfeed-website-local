import { dataPush } from '@/utils/gtm';
import Icons from '../Icons';

import {
  Bottom,
  Container,
  Cta,
  Division,
  Information,
  TimeVenue,
  TitleAuthor,
  ButtonWrapper,
  Title,
} from './style';
import formatWorkshopDate from '@/utils/fomatWorkshopDate';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

const UpcomingEvents2 = ({
  deviceType,
  showRegistrationModal,
  workshopEventMeta,
}: {
  deviceType: String;
  showRegistrationModal: Function;
  workshopEventMeta: Object;
}) => {
  let {formattedDate, startTime, endTime} = formatWorkshopDate(workshopEventMeta.eventDate);

  const [rotateX, setRotateX] = useState('0deg');
  const [rotateY, setRotateY] = useState('0deg')

  return (
    <Container data-aos='zoom-in' id="cont">
      <Information id='card' >
        <div className='title'>UPCOMING WORKSHOP</div>
        <TitleAuthor>
          <h2 className='workshop'>
            Join our interactive Q&A session to clear more doubts about Automated Trading
          </h2>
          <p className='desc'>
            Beginner friendly | Free registration | 30 minutes | Doubt clearing
            session
          </p>
        </TitleAuthor>
        <TimeVenue>
          <div className='row'>
            <div className='imageContainer'>
              <Icons
                name={workshopEventMeta.status === 'Active' ? 'date' : 'fire'}
              />
            </div>
            <div className='details'>
              <div className='heading'>
                {workshopEventMeta.status === 'Active'
                  ? formattedDate
                  : 'Hurry Up'}
              </div>
              <div className='description'>
                {workshopEventMeta.status === 'Active'
                  ? `${startTime} - ${endTime}`
                  : 'Only Few Seats Available!'}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='imageContainer'>
              <Icons name={'camera'} />
            </div>
            <div className='details'>
              <div className='heading'>Online Event</div>
              <div className='description'>
                Will share the link to your email
              </div>
            </div>
          </div>
        </TimeVenue>
        <Division />
        <Bottom>
          <span className='attendees'>5K+ traders have attended</span>
          <ButtonWrapper>
            {/* <Cta
              id='mf_cta_workshop_details'
              type='ghost'
              onClick={() => {
                dataPush('mf_cta_click', {
                  event_action: 'Button Click',
                  event_label: 'Workshop Details',
                  position: 'workshop',
                });
                window.open('https://workshop.marketfeed.com/');
              }}
            >
              Workshop Details
            </Cta> */}
            <Cta
              onClick={() => {
                dataPush('mf_register_workshop_click', {
                  event_action: 'Button Click',
                  event_label: 'Join Workshop',
                  position: 'bottom_banner',
                });
                showRegistrationModal();
              }}
            >
              <span style={{ marginRight: 8 }}>Reserve your Seat</span>
            </Cta>
          </ButtonWrapper>
        </Bottom>
      </Information>
    </Container>
  );
};

export default UpcomingEvents2;
