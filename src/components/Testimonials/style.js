import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px ${rem(188)};
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background: linear-gradient(180deg, #121212 0%, #000000 100%);
  &:before {
    content: url('https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716');
    position: absolute;
    transform: rotate(90deg);
    left: -450px;
    top: 248px;
    opacity: 0.8;
  }
  @media (max-width: 1386px) {
    padding: 80px 300px;
  }

  @media (max-width: 1280px) {
    padding: 80px 250px;
  }
  @media (max-width: 1199px) {
    padding: 52px 40px;
    background: transparent;
  }
  @media (max-width: 767px) {
    padding: 30px ${rem(0)};
    background: transparent;
  }
`;

export const Title = styled.span`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.H1};
  color: ${props => props.theme.colours.fontPrimary};
  margin-bottom: 60px;
  line-height: 70px;
  letter-spacing: -0.04em;

  @media (max-width: 1199px) {
    font-size: 32px;
    line-height: 40px; /* 125% */
    letter-spacing: -1.28px;
    margin-bottom: 32px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: normal;
    letter-spacing: -0.56px;
    margin-bottom: 24px;
  }
`;

export const ItemRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 24px;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 767px) {
    overflow: scroll;
    padding: 0 24px;
    gap: 0px;
    margin: 0 24px 0 0;
  }
`;

export const ItemColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 ${rem(12)} 0 0;
    flex-direction: row;
    justify-content: unset;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${props => (props.type === 'left' ? '90px 50px' : '50px')};
  border-radius: 38px;
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  position: relative;
  @media (max-width: 1199px) {
    border-radius: 20px;
    padding: ${props => (props.type === 'left' ? '32px 32px' : '32px')};
  }
  @media (max-width: 767px) {
    border-radius: 20px;
    padding: 20px 16px;
    min-width: ${rem(240)};
    height: 383px;
    justify-content: space-between;
  }
  &:before {
    content: '';
    background: linear-gradient(216.94deg, #1a1a1a 0%, #101010 100%);
    position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    left: 2px;
    top: 2px;
    border-radius: 36px;
    @media (max-width: 1199px) {
      border-radius: 20px;
    }
    @media (max-width: 767px) {
      border-radius: 20px;
    }
  }
  .ratingReview {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-item: flex-start;
    justify-content: start;
    margin-bottom: 32px;
    position: relative;
    @media (max-width: 767px) {
      margin-bottom: 25px;
      justify-content: space-between;
      height: 258px;
    }
    svg {
      flex: none;
    }
    span {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
      font-size: ${props => props.theme.theme.fontSizes.XL};

      opacity: ${props => props.theme.opacity.DARK};
      text-align: left;

      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XS};
      }
    }
  }
  .icon-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .ratedUser {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: relative;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      @media (max-width: 767px) {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }
    }

    .userDetails {
      display: flex;
      flex-direction: column;
      gap: 2px;
      align-items: flex-start;

      position: relative;
      .name {
        font-family: ${props => props.theme.theme.fontFamily};
        font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
        font-size: ${props => props.theme.theme.fontSizes.XL};
        @media (max-width: 1199px) {
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.013px;
        }
        @media (max-width: 767px) {
          font-size: ${props => props.theme.theme.fontSizes.S};
        }
      }

      .designation {
        font-family: ${props => props.theme.theme.fontFamily};
        font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
        font-size: ${props => props.theme.theme.fontSizes.M};
        opacity: ${props => props.theme.opacity.MEDIUM};
        @media (max-width: 1199px) {
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.01px;
        }
        @media (max-width: 767px) {
          font-size: ${props => props.theme.theme.fontSizes.XS};
        }
      }
    }
  }
  svg.quotes {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
