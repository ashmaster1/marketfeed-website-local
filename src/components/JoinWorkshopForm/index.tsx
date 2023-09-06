import React, { useEffect, useState } from 'react';

import PhoneInput, {
  getCountryCallingCode,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import { toast, ToastContainer } from 'react-toastify';

import { dataPush } from '@/utils/gtm';
import Icons from '../Icons';

import {
  Cta,
  FormContainer,
  Wrapper,
  Desc,
  Input,
  InputItem,
  PhoneInputContainer,
  EventDate,
  Heading,
  TimeVenue,
  Aum,
} from './style';
import { isMobile, isTablet } from 'react-device-detect';

const JoinWorkshopForm = ({
  submitRegistrationForm,
  registrationCompleted,
  loading,
  showRegistrationModal,
  workshopEventMeta,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [isDisabled, setIsDisabled] = useState(false);

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

  useEffect(() => {
    if (registrationCompleted) {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [registrationCompleted]);

  const checkPhoneNumber = () => {
    try {
      if (isPossiblePhoneNumber(phone) && isValidPhoneNumber(phone)) {
        setIsDisabled(false);
        return true;
      } else {
        setIsDisabled(true);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitRegistration = () => {
    if (checkPhoneNumber() && name !== '' && validateEmail()) {
      const snackBarRequired = true;
      submitRegistrationForm({ name, email, phone, snackBarRequired });
      dataPush('mf_register_workshop_view', {
        event_action: 'Page View',
        event_label: 'Homepage success',
      });
    } else if (name === '' && name.length < 3) {
      dataPush('mf_register_workshop_error', {
        event_action: 'Toast View',
        event_label: 'Invalid Name',
      });
      toast.error('Enter valid name', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!checkPhoneNumber()) {
      dataPush('mf_register_workshop_error', {
        event_action: 'Toast View',
        event_label: 'Invalid Phone',
      });
      toast.error('Enter valid phone number', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!validateEmail()) {
      dataPush('mf_register_workshop_error', {
        event_action: 'Toast View',
        event_label: 'Invalid Email',
      });
      toast.error('Enter valid email id', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //keeping here for futute reference
  // return (
  //   <>
  //     <FormContainer>
  //       <Input>
  //         <InputItem>
  //           <span className='label'>Full name</span>
  //           <input
  //             value={name}
  //             type='text'
  //             placeholder='Enter your name'
  //             required
  //             onChange={e => setName(e.target.value)}
  //           />
  //         </InputItem>
  //         <InputItem>
  //           <span className='label'>Phone number</span>
  //           <PhoneInputContainer>
  //             <PhoneInput
  //               className='phoneInput'
  //               defaultCountry='IN'
  //               maxLength='17'
  //               placeholder='Enter your phone number'
  //               value={phone}
  //               onChange={setPhone}
  //               international
  //               countryCallingCodeEditable={false}
  //               disabled={checkPhoneNumber}
  //               onCountryChange={code => {
  //                 setCountryCode(`+${getCountryCallingCode(code)}`);
  //               }}
  //             />
  //           </PhoneInputContainer>
  //           {/* <input
  //             value={phone}
  //             type='tel'
  //             placeholder='Enter your phone number'
  //             onChange={e => setPhone(e.target.value)}
  //             required
  //           /> */}
  //         </InputItem>
  //         <InputItem>
  //           <span className='label'>Email address</span>
  //           <input
  //             value={email}
  //             type='email'
  //             placeholder='Enter your email address'
  //             onChange={e => setEmail(e.target.value)}
  //             required
  //           />
  //         </InputItem>
  //       </Input>
  //       <Cta
  //         id='mf_register_workshop_submit_top'
  //         onClick={() => {
  //           dataPush('mf_register_workshop_submit', {
  //             event_action: 'Button Click',
  //             event_label: 'Register For Workshop',
  //             position: 'top',
  //           });
  //           submitRegistration({ name, email, phone });
  //         }}
  //         disabled={loading}
  //       >
  //         {!loading ? (
  //           'Register for Workshop'
  //         ) : (
  //           <span className='loader-9'></span>
  //         )}
  //       </Cta>
  //       <EventDate>Next on {formattedDate}</EventDate>
  //     </FormContainer>
  //     <ToastContainer />
  //   </>
  // );

  return (
    <FormContainer>
      <Aum>
      <Icons name={'shield'} />
        <div className='right'>
          <div className='top'>
            ₹135 Crores+
          </div>
          <div className='bottom'>
            deployed by marketfeed users
          </div>
        </div>
      </Aum>
      <Wrapper>
        <div className='child'>
          <div className='iconContainer'>
            <Icons name='tick2' />
          </div>
          <span>Potentially better returns than mutual funds and stocks</span>
        </div>
        <div className='child'>
        <div className='iconContainer'>
          <Icons name='tick2' />
          </div>
          <span>Start with just ₹2.4 Lakhs, no upper limit</span>
        </div>
      </Wrapper>
      <Cta onClick={() => showRegistrationModal()}>
        <span style={{ marginRight: isMobile ? 2 : 10 }}>Get Started</span>{' '}
        <Icons name='arrow' color="#111"/>
      </Cta>
    </FormContainer>
  );
};

export default JoinWorkshopForm;
