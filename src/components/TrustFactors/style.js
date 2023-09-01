import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 ${rem(75)};
  height: 72px;
  justify-content: center;
  position: absolute;
  bottom: 140px;
  @media (max-width: 1199px) {
    position: relative;
    bottom: auto;
    padding: ${rem(80)} 0 ${rem(40)};
    height: auto;
  };
`;
export const Factors = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 52px;
  background: #141414;
  width: 1140px;
  @media (max-width: 1199px) {
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    border-radius: 0;
    background: transparent;
  };
`;

export const Factor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  img {
    width: 24px;
  }
  @media (max-width: 1199px) {
    flex-basis: 25%;
    flex-direction: column;
    text-align: center;
    margin-bottom: 44px;
  }
  @media (max-width: 767px) {
    flex-basis: 50%;
    flex-direction: column;
    text-align: center;
    margin-bottom: 44px;
  }
  .content {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.M};
    color: #fff;
    @media (max-width: 1199px) {
      font-size: 14px;
      opacity: ${props => props.theme.opacity.DARK};
    };
  }
`;
