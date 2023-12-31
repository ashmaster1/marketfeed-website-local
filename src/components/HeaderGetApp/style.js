import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 36px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  z-index: 100;
  margin: auto;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    padding: ${rem(24)} 0 ${rem(20)} 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: rgba(30, 34, 52, 0.8);
  border-radius: 20px;
  padding: 40px 60px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  border-radius: 20px;
  position: relative;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 20px 20px;
  }
  &:before {
    content: '';
    background: linear-gradient(133deg, #383838 -58.67%, #292929 68.16%);
    position: absolute;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    left: 1.5px;
    top: 1.5px;
    border-radius: 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
  .title {
    text-align: center;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XXL};
    margin-bottom: 12px;
  }

  .storeRow {
    display: flex;
    width: 100%;
    flex-direction: row;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
    a {
      cursor: pointer;
      img {
        @media (max-width: 767px) {
          width: 168px;
        }
      }
    }
  }

  .desc {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.S};
    opacity: ${props => props.theme.opacity.DARK};
    @media (max-width: 767px) {
      text-align: center;
      font-size: ${props => props.theme.theme.fontSizes.XS};
      width: 100%;
    }
  }
`;
