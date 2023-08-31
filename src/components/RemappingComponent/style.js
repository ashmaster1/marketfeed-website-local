import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const ContactCard = styled.div`
  background-color: #ffffff;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  flex-grow: 0;
  padding: 80px 64px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  z-index: 1;

  position: relative;

  width: 1140px;
  .bg {
    background-color: #ffece3;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;

    z-index: -1;

    border-radius: 40px;

    border-top-left-radius: 150px;
    border-bottom-left-radius: 250px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  .contactSection1 {
    width: 50%;

    padding-right: 20px;
    .sectionTitle {
      font-family: Satoshi-Black;
      font-size: 40px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      color: #484848;

      margin-bottom: 24px;
      .link {
        color: #170439;
        text-decoration: none;
        span {
          background: linear-gradient(96.44deg, #861c7b 14.16%, #3d108d 81.46%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
      @media (max-width: 1024px) {
        font-size: 26px;
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #637bff;
      }
    }
    .sectionDetail {
      font-family: "Satoshi-Regular";
      font-size: 20px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: normal;
      text-align: left;
      color: #170439;
      @media (max-width: 1024px) {
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        text-align: left;
      }
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    @media (max-width: 1024px) {
      padding: 0;
      border: none;
      padding-bottom: 20px;

      width: 100%;
    }
  }
  .contactSection2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sectionDetailDesktop {
    position: relative;
    z-index: 1;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .sectionDetailMobile {
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
  }
  .emailInputContainer {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .emailInputContainerMobile {
    margin-bottom: 16px;
  }

  .submitIcon {
    position: absolute;
    top: 134px;
    right: 500px;
    z-index: 2;
    @media (max-width: 1024px) {
      top: 168px;
      left: 30px;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
    height: 100%;
    flex-direction: column;
    padding: ${rem(40)};
    width: ${rem(321)};
    padding: 24px 16px;

    border-radius: 20px;
    box-shadow: 0 4px 25px 0 rgba(123, 123, 123, 0.1);
    background-color: #fff;
  }
`;

export const Section = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #f5fff9 0%, #fafefb 100%);
`;

export const Container = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: ${rem(150)} ${rem(150)};
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(to bottom, #f5fff9 0%, #fafefb 100%);

  width: 100%;
  height: 70%;
  .wrapper {
    display: flex;
    padding-top: 80px;
    @media (max-width: 1024px) {
      align-items: center;
      flex-direction: column;
    }
  }
  @media (max-width: 1024px) {
    padding: 40px 24px;
    width: 100%;
    align-items: center;
  }
  @media (min-width: 1280px) {
    width: 100%;
    padding: ${rem(100)} ${rem(150)};
  }
  @media (min-width: 1980px) {
    width: ${rem(2560)};
  }
`;
export const ImageWrapper = styled.div`
  height: 305px;
`;
export const Title = styled.div`
  color: #484848;
  font-family: Satoshi-Black;
  font-size: 50px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -1px;
  text-align: left;
  @media (max-width: 1025px) {
    font-size: ${rem(32)};
    line-height: 1.2;
    padding-top: ${rem(60)};
    text-align: center;
  }
`;

export const Button = styled.a`
  width: 172px;
  height: 62px;

  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  font-family: "Satoshi-Bold";

  text-transform: none;
  letter-spacing: 0px;

  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px rgba(255, 255, 255, 0.1);
  background-color: #170439;
  color: #ffff;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  margin-bottom: 8px;
  margin-right: -4px;
  &:before {
    content: "";
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
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
  @media (max-width: 768px) {
    width: 280px;
    height: ${rem(51)};
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    padding: 0 0 2px 0;
  }
  @media (min-width: 1280px) {
    border-radius: 16px;
    font-size: ${rem(18, "medium")};

    width: ${rem(172)};
    height: ${rem(63)};
  }
  @media (min-width: 1440px) {
    font-size: ${rem(18)};
  }
`;

export const EmailInput = styled.input`
  border-radius: 24px;
  box-shadow: 10px 20px 50px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border: none;

  padding: 10px 10px 10px 32px;

  width: 479px;
  height: 82px;

  position: absolute;
  top: 105px;
  right: 50px;

  z-index: 0;

  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #5a6480;
    font-family: "Satoshi-Regular";
  }
  :-ms-input-placeholder {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #959595;
  }
  @media (min-width: 767px) {
    font-size: ${rem(18)};
  }
`;

export const EmailInputMobile = styled.input`
  border-radius: 16px;
  border: solid 1px #f3f3f3;
  background-color: #fff;

  padding: 10px 10px 10px 32px;

  width: 280px;
  height: 54px;

  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #959595;
  }
  :-ms-input-placeholder {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #959595;
  }
`;
