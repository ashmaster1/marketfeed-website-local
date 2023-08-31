import { useState } from 'react';

import { useRouter } from 'next/router';

import { dataPush } from '@/utils/gtm';

import Icons from '../Icons';
import { Container, Cta, Heading, Team } from './style';

export default function MeetTheTeam(props) {
  const [showMembers, setShowMembers] = useState(false);
  const router = useRouter();
  const members = [
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Vishwak Saen.png',
      name: 'Vishvak Saen',
      designation: 'VP, Product',
      linkedIn: 'https://www.linkedin.com/in/vishvak/',
    },
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Vivek Krishna.png',
      name: 'Vivek Krishna',
      designation: 'Head of Design',
      linkedIn: 'https://www.linkedin.com/in/vrkdesignpro/',
    },
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Sajin Ravindran.png',
      name: 'Sajin Ravindran',
      designation: 'Principal Software Engineer',
      linkedIn: 'https://www.linkedin.com/in/san4developer/',
    },
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Vivek Selvarajan.png',
      name: 'Vivek Selvarajan',
      designation: 'Lead - Software Engineer',
      linkedIn: 'https://www.linkedin.com/in/vivek-selvaraj/',
    },
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Ajay Ajith.png',
      name: 'Ajay Ajith',
      designation: 'Lead - Social Media',
      linkedIn: 'https://www.linkedin.com/in/ajay-ajith-01/',
    },
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Naveen Sunil.png',
      name: 'Naveen Sunil',
      designation: 'Lead - Sales & Marketing',
      linkedIn: 'https://www.linkedin.com/in/naveen-sunil-48522b127/',
    },
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Abdul Khader.png',
      name: 'Abdul Khader',
      designation: 'Lead - Initiatives & Support',
      linkedIn: 'https://www.linkedin.com/in/abdulkhaderma/',
    },
    {
      img: 'https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Yamini H Kadakol.png',
      name: 'Yamini H Kadakol',
      designation: 'Human Resources',
      linkedIn: 'https://www.linkedin.com/in/yamini-h-kadakol/',
    },
  ];
  return (
    <Container>
      <Heading>
        <div className='titleColumn'>
          <span className='title'>
            Meet
            <br />
            Our Team
          </span>
          {/* <span className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat est nunc, ullamcorper varius sapien consequat quis.
          </span> */}
        </div>
        <div className='founderColumn'>
          <div
            className='founder'
            onClick={() =>
              window.open('https://www.linkedin.com/in/shariquesamsudheen/')
            }
          >
            <div className='dp'>
              <div className='wrapper'>
                <div className='linkedin'>
                  <span>View in</span>
                  <Icons
                    name='viewlinkedin'
                    width={58}
                    height={15}
                    alt={'linkedin'}
                  />
                </div>
                <img
                  src={`https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Sharique%20Samsudheen.png`}
                />
              </div>
            </div>
            <span className='name'>Sharique Samsudheen</span>
            <span className='desig'>CEO & Co-Founder</span>
          </div>
          <div
            className='founder'
            onClick={() => window.open('https://www.linkedin.com/in/sooraje/')}
          >
            <div className='dp'>
              <div className='wrapper'>
                <div className='linkedin'>
                  <span>View in</span>
                  <Icons
                    name='viewlinkedin'
                    width={58}
                    height={15}
                    alt={'linkedin'}
                  />
                </div>
                <img src='https://marketfeed-app.gumlet.io/marketfeed-website/Photo-Sooraj%20E.png' />
              </div>
            </div>
            <span className='name'>Sooraj E</span>
            <span className='desig'>CTO & Co-Founder</span>
          </div>
        </div>
      </Heading>
      <Team>
        {members.map((member, index) => {
          return (
            <div
              className='member'
              onClick={() => window.open(member.linkedIn)}
            >
              <div className='dp'>
                <div className='linkedin'>
                  <span>View in</span>
                  <Icons
                    name='linkedInSmall'
                    width={20}
                    height={20}
                    alt={'linkedin'}
                  />
                </div>
                <img src={member.img} />
              </div>

              <span className='name'>{member.name}</span>
              <span className='desig'>{member.designation}</span>
            </div>
          );
        })}
      </Team>
      <Cta
        id='mf_cta_view_employees'
        onClick={() =>
          dataPush('mf_cta_click', {
            event_action: 'Button Click',
            event_label: 'View Employees',
            position: 'About Us',
          })
        }
        target='_blank'
        href='https://www.linkedin.com/company/marketfeedapp/people/'
      >
        <span>View All Team Members</span>
      </Cta>
    </Container>
  );
}
