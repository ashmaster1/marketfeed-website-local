import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 355px 80px 356px;
  
  flex-direction: column;
  align-items: center;
  background: #121212;

  @media (max-width: 1199px) {
    padding: 40px 24px;
  }
`;

export const Title = styled.h2`
color: #FFF;
text-align: center;
font-feature-settings: 'liga' off;
font-family: Satoshi-Variable;
font-size: 56px;
font-style: normal;
font-weight: 900;
line-height: 70px; /* 125% */
letter-spacing: -2.24px;
  @media (max-width: 1199px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1.28px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: normal;
    letter-spacing: -0.56px;
    margin-bottom: 4px;
  }
`;

export const SubTitle = styled.h2`
    color: #FFF;
    text-align: center;
    font-feature-settings: 'liga' off;
    font-family: Satoshi-Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.016px;
    opacity: 0.7;
    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: normal;
        letter-spacing: -0.013px;

      }
      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 22px; /* 157.143% */
        letter-spacing: -0.011px;
      }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 52px;
  margin-top: 68px;
  @media (max-width: 767px) {
    margin-top: 36px;
    gap: 32px;
}
  .feature{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 28px;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        flex-direction: column;
        text-align: center;
        gap: 16px;
    }
    .feature-icon{
        display: flex;
        width: 76px;
        height: 76px;
        padding: 15px 15.5px 15px 14.5px;
        justify-content: center;
        align-items: center;
        border-radius: 190px;
        background: linear-gradient(195deg, #383838 0%, #292929 100%);
        @media (max-width: 1199px) {
            width: 64px;
            height: 64px;
            padding: 12.632px 13.053px 12.632px 12.211px;
            border-radius: 160px;
          }
          @media (max-width: 767px) {
            width: 60px;
            height: 60px;
            padding: 12px 12px 12.001px 12px;
            border-radius: 232.501px;
          }
    }
    .right{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: 767px) {
            align-items: center;
        }
        .feature-title{
            color: #FFF;
            font-family: Satoshi-Variable;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.026px;
            font-size: 24px;
            @media (max-width: 1199px) {
                font-size: 24px;
                line-height: normal;
                letter-spacing: -0.019px;
              }
              @media (max-width: 767px) {
                font-size: 16px;
                line-height: normal;
                letter-spacing: -0.32px;
              }

        }
        .feature-subtitle{
            color: #FFF;
            font-family: Satoshi-Variable;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.016px;
            opacity: 0.5;
            @media (max-width: 1199px) {
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: -0.013px;
              }
              @media (max-width: 767px) {
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: -0.011px;
              }
        }
    }
  }
`

export const Cta = styled.button`
    background: #ffc400;
    color: #000;
  border: none;
  outline: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  width: 294px;
  border-radius: 36px;
  cursor: pointer;
  margin-top: 72px;
  span {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    color: color: #111;
    @media (max-width: 767px) {
      color: #111;
      font-size: 16px;
    }
  }
  @media (max-width: 1199px) {
    margin-bottom: 40px;
    background-color: #fec33b;
    border-radius: 36px;
    z-index: 1;
    width: 160px;
    height: 60px;
    margin-top: 60px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
    background-color: #fec33b;
    border-radius: 36px;
    z-index: 1;
    width: 150px;
    height: 54px;
    margin-top: 36px;
  }
`;
