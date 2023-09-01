import styled from 'styled-components';

import { rem } from '@/utils/remConverter';

export const Container = styled.div`
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  z-index: 101;
  width: 96%;
  max-width: 650px;
  background: #ffffff;
  border-radius: 16px;
  margin: auto;
  display: flex;
`;

export const PopUpContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 16px;
`;

export const Cta = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 46px;
  cursor: pointer;
  background-color: ${props => props.theme.colours.CTA_PRIMARY};
  border-radius: 16px;
  color: inherit;
  border: none;
  outline: inherit;
  color: ${props => props.theme.colours.BLACK};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${props => props.theme.theme.fontSizes.S};
`;

export const Desc = styled.div`
  width: 90%;
  color: #04081c;
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${props => props.theme.theme.fontSizes.XS};
  line-height: 19px;
  opacity: 1;
  margin: 16px 0 12px 0;
`;

export const Close = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
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

    @media (max-width: 767px) {
      align-items: center;
      background-color: #fff;
      font-size: ${rem(14)};
      height: ${rem(11)};
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
