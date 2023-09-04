import { rem } from '@/utils/remConverter';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 50px 40px;
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  border-radius: 38px;
  position: relative;

  @media (max-width: 767px) {
    padding: 24px 20px;
    border-radius: 20px;
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
    @media (max-width: 767px) {
      border-radius: 20px;
    }
  }
`;

export const Aum = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(0, 0, 0, 0.10);
margin-bottom: 40px;
opacity: 0.9;
@media (max-width: 1199px) {
  margin-bottom: 24px;
}
@media (max-width: 767px) {
  margin-bottom: 24px;
}

  .right{
    display: flex;
    flex-direction: column;
    .top{
      color: var(--lm-white, #FFF);
      font-feature-settings: 'liga' off;
      font-family: ${props => props.theme.theme.fontFamily};
      font-size: ${props => props.theme.theme.fontSizes.LH3};
      font-style: normal;
      font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
      line-height: normal;
      letter-spacing: -0.022px;
      opacity: 0.9;
      @media (max-width: 1199px) {
        font-size: 20px;
        letter-spacing: -0.016px;
      }
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XL};
        letter-spacing: -0.016px;
      }
      
      
    };
    .bottom{
      color: var(--lm-white, #FFF);
      font-feature-settings: 'liga' off;
      font-family: ${props => props.theme.theme.fontFamily};
      font-size: ${props => props.theme.theme.fontSizes.M};
      font-style: normal;
      font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
      line-height: normal;
      letter-spacing: -0.014px;
      opacity: 0.9;
      @media (max-width: 1199px) {
        font-size: 12px;
        letter-spacing: -0.01px;

      }
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XXS};
        letter-spacing: -0.016px;
      }
      
    };
  };
`

export const Input = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const EventDate = styled.div`
  color: #fff;
  position: relative;
  margin-top: 8px;
  opacity: 0.4;
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: ${props => props.theme.theme.fontSizes.XS};
  font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
`;
export const PhoneInputContainer = styled.div`
  height: 56px;
  border-radius: 12px;
  padding: 16px 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: #transparent;
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: ${props => props.theme.theme.fontSizes.M};
  padding: 0 10px;
  .PhoneInputInput.PhoneInputInput {
    align-items: center;
    color: #fff;
    background-color: transparent;
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
      font-size: ${rem(14)};
      width: ${rem(135)};
    }
  }
  .PhoneInput.PhoneInputInput:focus & {
    border: 1px solid blue;
  }

  // .PhoneInputInput.PhoneInputInput:focus {
  //   background-color: #fff;
  //   outline-width: 1px;
  //   outline-color: red;
  // }
  // .PhoneInputInput.PhoneInputInput:focus-visible {
  //   background-color: transparent;
  //   outline-width: 1px;
  //   outline-color: red;
  // }
  .PhoneInputCountrySelectArrow.PhoneInputCountrySelectArrow {
    color: #fff;
    opacity: 0.4;
  }
`;

export const Wrapper = styled.ul`
  position: relative;
  margin-bottom: 42px;
  @media (max-width: 1199px) {
    margin-bottom: 24px;
  }
  li {
    display: flex;
    // justify-content: space-between;
    list-style: none;
    margin-bottom: 12px;
    align-items: center;
    span {
      color: #fff;
      font-family: ${props => props.theme.theme.fontFamily};
      font-size: ${props => props.theme.theme.fontSizes.S};
      font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
      margin-left: 12px;
      opacity: 0.7;
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XS};
        letter-spacing: -0.016px;
      }
    }
  }
`;
export const Desc = styled.div`
  color: #fff;
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: ${props => props.theme.theme.fontSizes.s};
  margin-top: 16px;
  text-align: center;
  width: 100%;
  opacity: 0.7;
  letter-spacing: -0.016px;
`;
export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
  .label {
    text-align: left;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.S};
    margin-bottom: 8px;
  }

  input {
    height: 56px;
    border-radius: 12px;
    padding: 16px 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: transparent;
    font-family: ${props => props.theme.theme.fontFamily};
    font-size: ${props => props.theme.theme.fontSizes.M};
    outline: none;
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
  border-radius: 16px;
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

export const Heading = styled.div`
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: ${props => props.theme.theme.fontSizes.XXXL};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};

  color: #fff;
  line-height: 32px;
  letter-spacing: -0.0008em;
  position: relative;
`;

export const TimeVenue = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 80px;
  position: relative;
  margin-top: 40px;
  margin-bottom: 36px;
  @media (max-width: 767px) {
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

    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    .heading {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
      font-size: ${props => props.theme.theme.fontSizes.XXL};
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.S};
      }
    }

    .description {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
      font-size: ${props => props.theme.theme.fontSizes.XL};
      opacity: ${props => props.theme.opacity.DARK};
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XS};
      }
    }
  }
`;
