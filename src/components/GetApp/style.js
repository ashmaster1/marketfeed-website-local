import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${rem(80)} ${rem(150)};
  background: #000;
  @media (max-width: 767px) {
    padding: 36px 20px;
  }
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 32px;
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
  border-radius: 36px;
  position: relative;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 36px 24px;
  }
  &:before {
    content: '';
    background: linear-gradient(216.94deg, #1a1a1a 0%, #101010 100%);
    position: absolute;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    left: 1.5px;
    top: 1.5px;
    border-radius: 36px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
  .title {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
    font-size: ${props => props.theme.theme.fontSizes.H2_BOLD};
    margin-bottom: 12px;
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XXXL};
      text-align: center;
      width: 100%;
    }
  }

  .subtitle {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.M};
    opacity: ${props => props.theme.opacity.DARK};
    margin-bottom: 40px;
    @media (max-width: 767px) {
      text-align: center;
      width: 100%;
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
  }

  .storeRow {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 18px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
    a {
      cursor: pointer;
      img {
        width: 235px;
        @media (max-width: 767px) {
          width: 235px;
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

export const Right = styled.div`
  width: 230px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  @media (max-width: 767px) {
    margin-top: ${rem(35)};
    display: none;
  }
  .desc {
    margin-top: 24px;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.M};
    opacity: ${props => props.theme.opacity.DARK};
  }
`;
