import React, { useEffect, useState } from 'react';

import PhoneInput, {
  getCountryCallingCode,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import { toast } from 'react-toastify';

import { dataPush } from '@/utils/gtm';

import Icons from '../Icons';
import {
  Close,
  Container,
  Cta,
  Desc,
  FormContainer,
  FormDetailsWrapper,
  FormSuccessWrapper,
  Input,
  InputItem,
  Mask,
  PhoneInputContainer,
  SubHeading,
  SuccessDesc,
  SuccessMessage,
  Title,
  TimeVenue,
  Disclaimer,
} from './style';
import { isMobile } from 'react-device-detect';

const JoinWorkshopModal = ({
  closeModal,
  registrationCompleted,
  submitRegistrationForm,
  loading,
  showRegistrationModal,
  showRegistration,
  workshopEventMeta,
}: {
  showRegistrationModal: Boolean;
  closeModal: Function;
  showRegistration: Boolean;
  registrationCompleted: Boolean;
  submitRegistrationForm: Function;
  loading: Boolean;
  workshopEventMeta: Object;
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [isDisabled, setIsDisabled] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(false);
  let deviceType = isMobile ? 'mobile' : 'desktop'

  useEffect(() => {
    if (showRegistrationModal) {
      setShowAnimation(true);
      dataPush('mf_register_workshop_view', {
        event_action: 'Page View',
        event_label: 'Pop up Form',
      });
    } else {
      setShowAnimation(false);
    }
  }, [showRegistrationModal]);

  useEffect(() => {
    if (registrationCompleted && !showRegistration) {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [registrationCompleted, showRegistrationModal]);

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
      submitRegistrationForm({ name, email, phone });
      dataPush('mf_register_workshop_view', {
        event_action: 'Page View',
        event_label: 'Pop up success',
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
    <>
      {showRegistrationModal && <Mask onClick={() => closeModal()} />}
      <Container show={showAnimation}>
        <FormContainer>
          {deviceType === 'mobile' && !registrationCompleted && (
            <Title>
              Join our interactive {deviceType === 'desktop' && <br />} Q&A session to clear more doubts {deviceType === 'desktop' && <br />} about Automated Trading
              {/* Attend the workshop{' '}
            {deviceType === 'desktop' && <br />} to start trading
            {deviceType === 'desktop' && <br />} with */}
            </Title>
          )}
          {deviceType === 'mobile' && !registrationCompleted && (
            <TimeVenue>
              <div className='row'>
                <div className='imageContainer'>
                  <Icons
                    width={18}
                    height={18}
                    opacity={1}
                    color={'rgba(15, 119, 240, 1)'}
                    bg={'transparent'}
                    name={
                      workshopEventMeta.status === 'Active' ? 'date' : 'fire'
                    }
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
            </TimeVenue>
          )}
          {!registrationCompleted ? (
            <>
              <Input>
                <InputItem>
                  <span className='label'>Full name</span>
                  <input
                    value={name}
                    type='text'
                    placeholder='Enter your name'
                    required
                    onChange={e => setName(e.target.value)}
                  />
                </InputItem>
                <InputItem>
                  <span className='label'>WhatsApp number</span>
                  <PhoneInputContainer>
                    <PhoneInput
                      className='phoneInput'
                      defaultCountry='IN'
                      maxLength='17'
                      placeholder='Enter your whatsapp number'
                      value={phone}
                      onChange={setPhone}
                      international
                      countryCallingCodeEditable={false}
                      disabled={checkPhoneNumber}
                      onCountryChange={code => {
                        setCountryCode(`+${getCountryCallingCode(code)}`);
                      }}
                    />
                  </PhoneInputContainer>
                  {/* <input
            value={phone}
            type='tel'
            placeholder='Enter your phone number'
            onChange={e => setPhone(e.target.value)}
            required
          /> */}
                </InputItem>
                <InputItem>
                  <span className='label'>Email address</span>
                  <input
                    value={email}
                    type='email'
                    placeholder='Enter your email address'
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </InputItem>
              </Input>
              <Cta
                id='mf_register_workshop_submit_popup'
                onClick={() => {
                  dataPush('mf_register_workshop_submit', {
                    event_action: 'Button Click',
                    event_label: 'Register For Workshop',
                    position: 'left_pop_up',
                    name: name,
                    email: email,
                    phone: phone
                  });
                  submitRegistration({ name, email, phone });
                }}
              >
                {!loading ? (
                  'Register for Workshop'
                ) : (
                  <div className='loader-9'>
                    <span></span>
                  </div>
                )}
              </Cta>
              <Disclaimer>
                * By registering you are agreeing to receive{' '}
                {deviceType === 'desktop'} WhatsApp and email communication
              </Disclaimer>
            </>
          ) : (
            <>
              <FormSuccessWrapper>
                <Icons name='success' />
                <SuccessMessage>
                  You have successfully registered for the workshop!
                </SuccessMessage>
                <SuccessDesc>
                  You will receive the webinar link on your registered Email &
                  WhatsApp
                </SuccessDesc>
                <Cta
                  id='mf_register_workshop_submit_popup'
                  onClick={() => {
                    dataPush('mf_join_whatsapp_click', {
                      event_action: 'Button Click',
                      event_label: 'join whatsapp',
                    });
                    window.open(workshopEventMeta.whatsappLink);
                  }}
                  style={{ marginTop: 40 }}
                >
                  Join WhatsApp Group
                </Cta>
              </FormSuccessWrapper>
            </>
          )}
        </FormContainer>
        <FormDetailsWrapper>
          <SubHeading>Upcoming Workshop</SubHeading>
          <Title>
          Join our interactive {deviceType === 'desktop' && <br />} Q&A session to {deviceType === 'desktop' && <br />} clear more doubts about Automated Trading
            {/* Attend the workshop{' '}
            {deviceType === 'desktop' && <br />} to start trading
            {deviceType === 'desktop' && <br />} with */}
          </Title>
          <Desc>
            Beginner friendly | Free registration{' '}
            {deviceType === 'desktop' && <br />} 30 minutes | Doubt clearing
            session
          </Desc>
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
          </TimeVenue>
        </FormDetailsWrapper>
        <Close onClick={() => closeModal()}>
          <Icons
            name='close'
            width={deviceType === 'mobile' ? '20' : '36'}
            height={deviceType === 'mobile' ? '20' : '36'}
            fill={deviceType === 'mobile' ? '#000' : 'white'}
          />
        </Close>
      </Container>
    </>
  );
};

export default JoinWorkshopModal;
