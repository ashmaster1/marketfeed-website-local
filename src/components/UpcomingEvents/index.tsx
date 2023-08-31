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

const UpcomingEvents = ({
  deviceType,
  showRegistrationModal,
  workshopEventMeta,
}: {
  deviceType: String;
  showRegistrationModal: Function;
  workshopEventMeta: Object;
}) => {
  let date = new Date(workshopEventMeta.eventDate);

  // Define an array of weekday names
  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Define an array of month names
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Function to convert date to nth format
  function getNth(day) {
    if (day % 10 === 1 && day !== 11) {
      return day + 'st';
    }
    if (day % 10 === 2 && day !== 12) {
      return day + 'nd';
    }
    if (day % 10 === 3 && day !== 13) {
      return day + 'rd';
    }
    return day + 'th';
  }

  // Function to convert 24-hour format to 12-hour format
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  // Format the start time
  let startTime = formatAMPM(date);

  // Add 30 minutes to the date
  date.setMinutes(date.getMinutes() + Number(workshopEventMeta.eventDuration));

  // Format the end time
  let endTime = formatAMPM(date);

  // Format the date
  let formattedDate =
    weekdays[date.getUTCDay()] +
    ', ' +
    months[date.getUTCMonth()] +
    ' ' +
    getNth(date.getUTCDate()) +
    ', ' +
    date.getUTCFullYear();

  return (
    <Container>
      <Title>Join our workshop to know more</Title>
      <Information>
        <div className='title'>UPCOMING WORKSHOP</div>
        <TitleAuthor>
          <h2 className='workshop'>
            Learn how you can make extra income with marketfeed
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
              <Icons name='arrow' />
            </Cta>
          </ButtonWrapper>
        </Bottom>
      </Information>
    </Container>
  );
};

export default UpcomingEvents;
