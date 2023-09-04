import { rem } from '@/utils/remConverter';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  bottom: 0;
  width: calc(100% - 320px);
  height: 695px;
  border-radius: 36px;
  margin: auto;
  padding: 60px;
  max-width: 1000px;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  opacity: ${props => (props.show ? 1 : 0)};
  transform: scale(${props => (props.show ? 1 : 0.9)});
  transition: all 0.1s ease;
  display: flex;
  @media (max-width: 1199px) {
    width: calc(55% - 40px);
    padding: 0;
    height: 630px;
  }
  @media (max-width: 767px) {
    width: calc(100% - 40px);
    padding: 0;
    height: 630px;
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
  }
`;

export const FormContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 40px 36px;
  max-width: 392px;
  background: #fff;
  z-index: 1;
  border-radius: 24px;
  @media (max-width: 1199px) {
    border-radius: 20px;
    padding: 28px 24px;
  }
`;

export const Input = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
  position: relative;
  @media (max-width: 1199px) {
    margin-bottom: 16px;
  }
  .label {
    text-align: left;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.S};
    margin-bottom: 8px;
    color: #000;
  }

  input {
    height: 56px;
    border-radius: 12px;
    padding: 16px 20px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: transparent;
    font-family: ${props => props.theme.theme.fontFamily};
    font-size: ${props => props.theme.theme.fontSizes.M};
    color: #000;
    outline: none;
  }
`;

export const Cta = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 67px;
  flex: none;
  cursor: pointer;
  background-color: ${props => props.theme.colours.CTA_PRIMARY};
  border-radius: 16px;
  color: inherit;
  border: none;
  outline: inherit;
  color: ${props => props.theme.colours.BLACK};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  margin-top: 12px;
  position: relative;
  overflow: hidden;
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
  @media (max-width: 1199px) {
    margin-top: 8px;
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

export const FormDetailsWrapper = styled.div`
  position: relative;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1199px) {
    display: none;
  }
`;
export const SubHeading = styled.div`
  color: rgba(68, 133, 247, 1);
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  opacity: ${props => props.theme.opacity.DARK};
  text-transform: uppercase;
  text-shadow: 0px 0px 4px 0px rgba(67, 133, 247, 0.2);
`;

export const Title = styled.div`
  letter-spacing: -0.04em;
  color: ${props => props.theme.colours.fontprimary};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.H2_REGULAR};
  line-height: 42px;
  margin-top: 16px;
  font-feature-settings: 'liga' on;
  span {
    color: #4485f7;
  }
  @media (max-width: 1199px) {
    color: #000;
    font-size: ${props => props.theme.theme.fontSizes.XXL};
    line-height: 1.2em;
  }
`;

export const TimeVenue = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 80px;
  position: relative;
  margin-top: 40px;
  @media (max-width: 1199px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    margin-top: 20px;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .imageContainer {
    width: 60px;
    height: 60px;
    flex: none;
    border-radius: 30px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);

    @media (max-width: 1199px) {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background: #e7f1fd;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    .heading {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
      font-size: ${props => props.theme.theme.fontSizes.XXL};
      @media (max-width: 1199px) {
        color: #000;
        font-size: ${props => props.theme.theme.fontSizes.S};
      }
    }

    .description {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
      font-size: ${props => props.theme.theme.fontSizes.XL};
      opacity: ${props => props.theme.opacity.DARK};
      @media (max-width: 1199px) {
        font-size: ${props => props.theme.theme.fontSizes.XS};
        color: #000;
      }
    }
  }
`;

export const Desc = styled.div`
  color: ${props => props.theme.colours.fontprimary};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  line-height: 27px;
  opacity: ${props => props.theme.opacity.DARK};
  margin-top: 16px;
`;

export const Close = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 1;
  @media (max-width: 1199px) {
    top: 16px;
    right: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;
export const PhoneInputContainer = styled.div`
  height: 56px;
  border-radius: 12px;
  padding: 16px 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: transparent;
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: ${props => props.theme.theme.fontSizes.M};
  padding: 0 10px;

  .PhoneInputInput.PhoneInputInput {
    align-items: center;
    color: #000;
    background-color: #fff;
    border: none;
    height: 100%;
    font-family: Satoshi-Medium;
    font-size: ${rem(16)};
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-left: 4px;
    padding: 16px 5px;

    @media (max-width: 1199px) {
      align-items: center;
      background-color: #fff;
      font-size: ${rem(14)};
      height: 100%;
      width: ${rem(135)};
    }
  }
  // .PhoneInputInput.PhoneInputInput:focus {
  //   background-color: #fff;
  //   outline-width: 0px;
  //   outline-style: none;
  // }
  // .PhoneInputInput.PhoneInputInput:focus-visible {
  //   background-color: #fff;
  //   outline-width: 0px;
  //   outline-style: none;
  // }
  .PhoneInputCountrySelectArrow.PhoneInputCountrySelectArrow {
    color: #fff;
    opacity: 0.4;
  }
`;

export const Mask = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  z-index: 100;
`;

export const FormSuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const SuccessDesc = styled.div`
  color: ${props => props.theme.colours.BLACK};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
  font-size: ${props => props.theme.theme.fontSizes.S};
  opacity: ${props => props.theme.opacity.MEDIUM};
  text-align: center;
  margin-top: 12px;
`;
export const SuccessMessage = styled.div`
  color: ${props => props.theme.colours.BLACK};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.XXXL};
  text-align: center;
  margin-top: 16px;
`;

export const Disclaimer = styled.div`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
  font-size: ${props => props.theme.theme.fontSizes.XS};
  color: #000;
  text-align: center;
  margin-top: 12px;
  opacity: 0.4;
`;
