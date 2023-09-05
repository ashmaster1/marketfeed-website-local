import styled from "styled-components";

import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 150px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #000000 0%, #121212 100%);
  position: relative;
  @media (max-width: 1386px) {
    padding: 80px 300px;
  }

  @media (max-width: 1280px) {
    padding: 80px 250px;
  }
  @media (max-width: 1199px) {
    padding: 40px 24px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  width: 100%;
  gap: 24px;
  position: relative;
  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-feature-settings: "liga" off;
  font-family: Satoshi-Variable;
  font-size: 56px;
  font-style: normal;
  font-weight: 900;
  line-height: 70px;
  letter-spacing: -2.24px;
  margin-bottom: 12px;
  @media (max-width: 1199px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1.28px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: normal;
    letter-spacing: -0.56px;
  }
`;

export const SubTitle = styled.h1`
  color: #B8B8B8;
  text-align: center;
  font-feature-settings: "liga" off;
  font-family: Satoshi-Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.016px;
  margin-bottom: 60px;
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

export const Strategy = styled.div`
  display: flex;
  width: ${rem(399)};
  align-items: center;
  flex-direction: column;
  padding: 50px 40px;
  border-radius: 38px;
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  position: relative;
  &:before {
    content: "";
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
  @media (max-width: 1199px) {
    padding: 30px 20px;
    border-radius: 20px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 24px 20px;
    border-radius: 20px;
  }

  &:hover > .know-more-cta {
    background: #ffc400;
    color: #000;
    span {
      color: #000;
    }
  }
`;

export const Highlight = styled.div`
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(93.06deg, #283daa 11.87%, #4385f7 93.92%);
  border-radius: 60px;
  padding: 6px 16px;
  margin-bottom: 12px;
  position: relative;

  span {
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.BOLD};
    font-size: ${(props) => props.theme.theme.fontSizes.XXS};
    @media (max-width: 767px) {
      font-size: ${(props) => props.theme.theme.fontSizes.XXS};
    }
  }
`;

export const Details = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${(props) => (props.type === "title" ? "36px" : "24px")};
  .title {
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.BOLDER};
    font-size: ${(props) => props.theme.theme.fontSizes.H2_BOLD};
    color: ${(props) => props.theme.colours.fontPrimary};
    margin-bottom: 4px;
    @media (max-width: 1199px) {
        font-size: 26px;
        line-height: normal;
        letter-spacing: -0.52px;
      }
    @media (max-width: 767px) {
        font-size: 22px;
        line-height: normal;
        letter-spacing: -0.44px;
    }
  }

  .subtitle {
    position: relative;
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.REGULAR};
    font-size: ${(props) => props.theme.theme.fontSizes.M};
    color: ${(props) => props.theme.colours.fontPrimary};
    opacity: ${(props) => props.theme.opacity.DARK};
    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: normal;
        letter-spacing: -0.011px;
    }
    
    @media (max-width: 767px) {ont-size: 
        font-size: 14px;
        line-height: normal;
        letter-spacing: -0.011px;
    }
  }

  .returns {
    position: relative;
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${(props) => props.theme.theme.fontSizes.XXL};
    color: ${(props) => props.theme.colours.fontPrimary};
    margin-right: 10px;
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
        font-size: 20px;
        line-height: normal;
        letter-spacing: -0.016px;
      }
    
    @media (max-width: 767px) {
        font-size: 20px;
        line-height: normal;
        letter-spacing: -0.016px;
    }
  }

  .description {
    position: relative;
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.REGULAR};
    font-size: ${(props) => props.theme.theme.fontSizes.XL};
    opacity: ${(props) => props.theme.opacity.MEDIUM};
    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: normal;
        letter-spacing: -0.013px;
      }
    @media (max-width: 767px) {
        font-size: 14px;
        line-height: normal;
        letter-spacing: -0.011px;
    }
  }
`;

export const Cta = styled.button`
  position: relative;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 67px;
  cursor: pointer;
  background-color: ${props => props.theme.colours.CTA_PRIMARY};
  border-radius: 60px;
  color: inherit;
  border: none;
  outline: inherit;
  color: ${props => props.theme.colours.BLACK};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  @media (max-width: 1199px) {
    font-size: 16px;
    letter-spacing: 0.1px;
    height: 52px;
  }
  @media (max-width: 767px) {
    font-size: ${props => props.theme.theme.fontSizes.S};
    letter-spacing: -0.016px;
    height: 52px;
  }
  overflow: hidden;
  transition: all 0.5s ease;
  position: relative;
  &:before {
    content: '';
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 67px;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-transition: none;
    transition: none;
  }
  &:hover:before {
    width: 120%;
    background-color: rgba(255, 255, 255, 0);
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }



  .loader-9 {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 2px solid #000;
    animation: rotation 1s linear infinite;
    &:after {
      content: '';
      position: absolute;
      left: 4px;
      top: 4px;
      border: 2px solid #000;
      width: 2px;
      height: 2px;
      border-radius: 50%;
    }
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const Warning = styled.div`
  font-family: ${(props) => props.theme.theme.fontFamily};
  font-weight: ${(props) => props.theme.theme.fontWeights.REGULAR};
  font-size: ${(props) => props.theme.theme.fontSizes.XL};
  color: rgba(255, 255, 255, 0.3);
  margin-top: 24px;
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
