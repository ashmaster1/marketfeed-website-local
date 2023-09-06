import styled from "styled-components";

import { rem } from "../../utils/remConverter";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 207px 0 0;
  height: 100vh;
  min-height: 948px;
  @media (max-width: 1199px) {
    padding: 160px 10% 0 10%;
    height: auto;
    min-height: auto;
  }
  @media (max-width: 767px) {
    min-height: auto;
    height: auto;
    padding: 160px 0 0;
  }
`;
export const Container = styled.div`
  display: flex;
  self-align: center;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  max-width: 1140px;
  gap: ${rem(50)};
  @media (max-width: 1199px) {
    gap: 20px;
    min-height: auto;
    height: auto;
  }
  width: 100%;
  position: relative;
  background: url("https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716")
    no-repeat;
  background-position: 10% -60%;
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    background-position: 50% 43%;
    gap: ${rem(20)};
    min-height: auto;
  }
  position: relative;
  &:before {
    content: "";
    filter: blur(4px);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: absolute;
    top: 50vh;
    right: 50vh;
  }
`;

export const LeftDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 70%;
  @media (max-width: 1199px) {
    margin-top: 70px;
  }
  @media (max-width: 767px) {
    margin-top: 0px;
  }
  .topText {
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${(props) => props.theme.theme.fontSizes.M};
    opacity: ${(props) => props.theme.opacity.DARK};
    margin-bottom: 16px;
    color: #4485f7;
    @media (max-width: 767px) {
      text-align: center;
      font-size: ${(props) => props.theme.theme.fontSizes.XS};
    }
  }

  .boldText {
    h1 {
      font-family: ${(props) => props.theme.theme.fontFamily};
      font-weight: ${(props) => props.theme.theme.fontWeights.BOLDER};
      font-size: ${(props) => props.theme.theme.fontSizes.VVXL};
      margin-bottom: 16px;
      color: #fff;
      letter-spacing: -0.04em;
      line-height: 86px;
      @media (max-width: 1199px) {
        font-size: 48px;
        line-height: 46px; /* 95.833% */
        letter-spacing: -0.96px;
      }
      @media (max-width: 767px) {
        text-align: center;
        font-size: 40px;
        line-height: 38px; /* 95% */
        letter-spacing: -0.8px;
      }
    }

    margin-top: 60px;
  }

  .tradeDescription {
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.REGULAR};
    font-size: ${(props) => props.theme.theme.fontSizes.H3};
    opacity: ${(props) => props.theme.opacity.DARK};
    margin-bottom: 40px;
    color: #fff;
    @media (max-width: 1199px) {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.013px;
    }
    @media (max-width: 767px) {
      text-align: center;
      font-size: ${(props) => props.theme.theme.fontSizes.XS};
    }
  }

  .aumCount {
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.REGULAR};
    font-size: ${(props) => props.theme.theme.fontSizes.H2_BOLD};
    opacity: ${(props) => props.theme.opacity.DARK};
    color: #fff;
    @media (max-width: 767px) {
      text-align: center;
      font-size: ${(props) => props.theme.theme.fontSizes.XXL};
      font-weight: ${(props) => props.theme.theme.fontWeights.MEDIUM};
    }
  }
`;

export const RightForm = styled.div`
  display: flex;
  width: 60%;
  max-width: 500px;
  max-height: 420px;
  margin-top: 24px;
  @media (max-width: 1199px) {
    width: 85%;
  }
  @media (max-width: 767px) {
    width: calc(100% - 48px);
    margin-top: 0px;
  }
`;
