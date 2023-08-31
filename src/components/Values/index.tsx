import Icons from '../Icons';
import { Container, Step, SubTitle, Title, WorkFlow } from './style';

const Values = props => {
  return (
    <Container>
      <Title>Our Values</Title>
      <SubTitle>
        We strongly believe that it’s not just <br />
        what you do that matters, it’s how you do it.
      </SubTitle>
      <WorkFlow>
        <Step>
          <Icons name='customerobs' width={80} height={80} alt={'telegram'} />
          <span className='stepTitle'>Customer Obsessed</span>
          <span className='stepDesc'>
            We are obsessed with ensuring that our customers and team members{' '}
            {props.deviceType == 'desktop' ? <br /> : null} are always happy
          </span>
        </Step>
        <Step>
          <Icons name='trustworthy' width={80} height={80} alt={'telegram'} />
          <span className='stepTitle'>Trustworthiness</span>
          <span className='stepDesc'>
            We are a small team that respects and relies on each other, to be
            honest and truthful to everyone, and tries to be the best version of
            ourselves every day!
          </span>
        </Step>
        <Step>
          <Icons name='ambitious' width={80} height={80} alt={'telegram'} />
          <span className='stepTitle'>Ambitious</span>
          <span className='stepDesc'>
            We try our best to set ambitious goals and do what's necessary to
            achieve them - individually and/or collectively
          </span>
        </Step>
        <Step>
          <Icons name='clarity' width={80} height={80} alt={'telegram'} />
          <span className='stepTitle'>Clarity of Thought</span>
          <span className='stepDesc'>
            Give and seek clarity with every step of{' '}
            {props.deviceType == 'desktop' ? <br /> : null} your journey
          </span>
        </Step>
        <Step>
          <Icons name='excellence' width={80} height={80} alt={'telegram'} />
          <span className='stepTitle'>Excellence</span>
          <span className='stepDesc'>
            We deliver beyond expectations
            {props.deviceType == 'desktop' ? <br /> : null}
            with excellence
          </span>
        </Step>
      </WorkFlow>
    </Container>
  );
};

export default Values;
