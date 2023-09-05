import { dataPush } from '@/utils/gtm';

import {
  Card,
  Container,
  Left,
} from './style';
import GetApp2 from '../GetApp2';

const HeaderGetApp = (props) => {
  return (
    <Container onClick={() => props.openAppScanModal(false)}>
      <GetApp2 openAppScanModal={() => props.openAppScanModal()} />
    </Container>
  );
};

export default HeaderGetApp;
