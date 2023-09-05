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


  // useEffect(() => {
  //   window.addEventListener('mousemove', (e) => rotateElement(e))

  //   return () => {window.removeEventListener('mousemove', (e) => rotateElement(e))}
  // },[])

  // function rotateElement(event){
  //   if(isMobile){
  //     return
  //   }
  //   let card = document.getElementById('card');
  //   //let container = document.getElementById('cont');
  //   const mouseX = event.clientX;
  //   const mouseY = event.clientY;
  //   const {x, y ,top, height, left, width} = card?.getBoundingClientRect();
  //   // const contRect = container?.getBoundingClientRect();
  //   // const ctop = contRect?.top;
  //   // const c
  //   // console.log(mouseX, cleft, mouseX, cleft+cwidth)
  //   // if(!((mouseX>cleft && mouseX<cleft+cwidth) && (mouseY>ctop && mouseY<ctop+cheight))){
  //   //   card?.style.setProperty("--rotateX", 0+"deg");
  //   //   card?.style.setProperty("--rotateY", 0+"deg")
  //   //   return
  //   // }
  //   const middleX = (left+width/2);
  //   const middleY = (top+height/2);
  //   const offsetX = (middleX - mouseX);
  //   const offsetY = (middleY - mouseY);
  //   const percentX = (offsetX/middleX*20);
  //   const percentY = offsetY/middleY*20;
  //   console.log(percentX, -1*percentY)
  //   card?.style.setProperty("--rotateX", percentY+"deg");
  //   card?.style.setProperty("--rotateY", -1*percentX+"deg")
  //   // setRotateX(-1*percentY+"deg");
  //   // setRotateY(percentX+"deg")
  // }

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
