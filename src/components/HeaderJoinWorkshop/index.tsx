import { useEffect, useState } from 'react';
import { Card, Container, Cta, Left } from './style';

const HeaderJoinWorkshop = props => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (props.isOpen) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.isOpen]);
  return (
    <Container className={active ? 'active' : ''}>
      <Card>
        <Left>
          <span className='title'>
            SEBI Registered RAs send recommendations to <br /> you, Accept it
            with just a single click!
          </span>
          <Cta onClick={() => props.setJoinWorkshop()}>
            Register for Workshop
          </Cta>
        </Left>
      </Card>
    </Container>
  );
};

export default HeaderJoinWorkshop;
