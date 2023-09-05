import styled from "styled-components";

import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 212px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #121212 0%, #000000 100%);
  position: relative;
  &:before {
    content: url("https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716");
    position: absolute;
    transform: rotate(90deg);
    left: -572px;
    top: 248px;
    opacity: 0.3;
  }
  &:after {
    content: url("https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716");
    position: absolute;
    right: -572px;
    bottom: -416px;
  }
  @media (max-width: 1386px) {
    padding: 80px 300px;
  }

  @media (max-width: 1280px) {
    padding: 80px 250px;
  }
  @media (max-width: 1199px) {
    padding: 40px 24px;
    background: transparent;
  }
  @media (max-width: 767px) {
    padding: 40px 24px;
    background: transparent;
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.theme.fontFamily};
  font-weight: ${(props) => props.theme.theme.fontWeights.BOLDER};
  font-size: ${(props) => props.theme.theme.fontSizes.H1};
  color: ${(props) => props.theme.colours.fontPrimary};
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

export const WorkFlow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 160px 60px;
  margin-bottom: 100px;
  position: relative;
  max-width: 968px;
  margin: auto;
  @media (max-width: 1400px) {
    width: 100%;
    gap: 20px;
  }
  @media (max-width: 1199px) {
    width: 100%;
    gap: 20px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 24px;
    gap: 40px 24px;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: center;
  }

  .dotted {
    position: absolute;
    top: 60px;
    left: 200px;
    height: 2px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='6' stroke-linecap='butt'/%3e%3c/svg%3e");
    width: 65%;
    @media (max-width: 1400px) {
      left: 110px;
    }
    @media (max-width: 1199px) {
      top: 45px;
      left: 120px;
      width: 70%
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  .line {
    position: absolute;
    top: 60px;
    left: 200px;
    height: 2px;
    background-color: #333333;
    width: 0;
    @media (max-width: 1400px) {
      left: 110px;
    }
    @media (max-width: 1199px) {
      top: 45px;
      left: 120px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  .path {
    position: absolute;
    top: 60px;
    left: 100px;
    @media (max-width: 1199px) {
      top: 45px;
      left: 165px;
    }
  }

  svg {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  flex: 1 0 25%;

  
  @media (max-width: 767px) {
    flex: 1 0 45%;
    align-items: center;
  }
  .stepTitle {
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.BOLD};
    font-size: ${(props) => props.theme.theme.fontSizes.XXXL};
    margin-bottom: 12px;
    @media (max-width: 1199px) {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.016px;
    }
    @media (max-width: 767px) {
      font-size: ${(props) => props.theme.theme.fontSizes.S};
      text-align: center;
    }
  }

  .stepDesc {
    font-family: ${(props) => props.theme.theme.fontFamily};
    font-weight: ${(props) => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${(props) => props.theme.theme.fontSizes.S};
    opacity: ${(props) => props.theme.opacity.MEDIUM};
    @media (max-width: 1199px) {
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.01px;
    }
    @media (max-width: 767px) {
      font-size: ${(props) => props.theme.theme.fontSizes.XS};
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 120px;
  width: 120px;
  border-radius: 60px;
  background: linear-gradient(
    143.12deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.05) 38.77%
  );

  backdrop-filter: blur(3.5px);
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
  &:before {
    content: "";
    background: linear-gradient(133deg, #383838 -58.67%, #292929 68.16%);
    position: absolute;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 60px;
    left: 1.5px;
    top: 1.5px;
    overflow: hidden;
  }

  svg {
    width: 72px;
    position: relative;
    @media (max-width: 767px) {
      width: 36px;
      display: block;
    }
  }
  @media (max-width: 1199px) {
    width: 84px;
    height: 84px;
    border-radius: 210px;
  }
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .stepNo {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    transition: opacity 0.5s ease-in;
    @media (max-width: 1199px) {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      font-size: ${(props) => props.theme.theme.fontSizes.XXXS};
    }
    @media (max-width: 767px) {
      width: 22px;
      height: 22px;
      border-radius: 11px;
      font-size: ${(props) => props.theme.theme.fontSizes.XXXS};
    }
    background-image: linear-gradient(
      304.07deg,
      #293eaa 10.34%,
      #4485f7 115.99%
    );
    span {
      font-family: ${(props) => props.theme.theme.fontFamily};
      font-weight: ${(props) => props.theme.theme.fontWeights.BOLD};
      font-size: ${(props) => props.theme.theme.fontSizes.XL};
      @media (max-width: 767px) {
        font-size: 15px;
      }
      @media (max-width: 767px) {
        font-size: ${(props) => props.theme.theme.fontSizes.XXXS};
      }
    }
  }
`;

export const Cta = styled.button`
  position: relative;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  width: 187px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colours.CTA_PRIMARY};
  border-radius: 16px;
  color: inherit;
  border: none;
  outline: inherit;
  margin-top: 100px;
  color: ${(props) => props.theme.colours.BLACK};
  font-family: ${(props) => props.theme.theme.fontFamily};
  font-weight: ${(props) => props.theme.theme.fontWeights.BOLD};
  font-size: ${(props) => props.theme.theme.fontSizes.XL};
  @media (max-width: 1199px) {
    margin-bottom: 40px;
    border-radius: 16px;
    z-index: 1;
    width: 160px;
    height: 60px;
    margin-top: 60px;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    margin-bottom: 10px;
    border-radius: 16px;
    z-index: 1;
    width: 150px;
    height: 54px;
    margin-top: 36px;
    font-size: 16px;
  }
  overflow: hidden;
  transition: all 0.5s ease;
  position: relative;
  &:before {
    content: "";
    content: "";
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
      content: "";
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
