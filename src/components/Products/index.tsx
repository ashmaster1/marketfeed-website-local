import { dataPush } from '@/utils/gtm';

import Icons from '../Icons';
import { Container, Product } from './style';

const Products = ({ deviceType }: { deviceType: any }) => {
  return (
    <Container>
      <Product
        type={'strategy'}
        onMouseEnter={() =>
          dataPush('mf_products_hover_view', {
            event_action: 'Hover View',
            event_label: 'Strategies',
          })
        }
      >
        <Icons
          name='productStrategy'
          width={'72px'}
          height={'72px'}
          alt={'productStrategy'}
        />
        <div className='title'>
          Trading {deviceType === 'desktop' && <br />} Strategies
        </div>
        <div className='desc'>
          Explore curated trading strategies {deviceType === 'mobile' && <br />}
          from SEBI {deviceType === 'desktop' && <br />} Registered Research
          Analysts
        </div>
        <div className='underline' />
      </Product>
      <Product
        type={'tradeExecution'}
        onMouseEnter={() =>
          dataPush('mf_products_hover_view', {
            event_action: 'Hover View',
            event_label: 'Single Click Trading',
          })
        }
      >
        <Icons
          name='productTradeExecution'
          width={'72px'}
          height={'72px'}
          alt={'productTradeExecution'}
        />
        <div className='title'>
          Execute Trades <br />
          with QuickTrade️
        </div>
        <div className='desc'>
          Trading strategies are copied and executed{' '}
          {deviceType === 'desktop' && <br />}instantly on your broker’s account{' '}
          <br />
          with a single click!
        </div>
        <div className='underline' />
      </Product>
    </Container>
  );
};

export default Products;
