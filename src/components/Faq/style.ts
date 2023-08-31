import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

interface FaqQuestionProps {
  active: Boolean;
}
interface FaqAnsProps {
  active: Boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 80px ${rem(188)};
  background: linear-gradient(180deg, #121212 0%, #000000 100%);
  @media (max-width: 1199px) {
    padding: 40px 40px;
    background: #1a1a1a;
    
  }
  @media (max-width: 767px) {
    padding: 40px 24px;
    background: transparent;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.H1};
  color: ${props => props.theme.colours.fontPrimary};
  margin-bottom: 60px;
  position: relative;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  
@media (max-width: 1199px) {
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 40px; /* 125% */
  letter-spacing: -1.28px;
}
  @media (max-width: 767px) {
    font-size: 28px;
    text-align: center;
    margin-bottom: 22px;
  }
`;

export const FaqContainer = styled.div`
  max-width: 1000px;
  width: 65%;
  margin: auto;
  @media (max-width: 1199px) {
    width: 55%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FaqItem = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid rgba(219, 226, 235, 0.12);

  &:nth-last-child(1) {
    border-bottom: 0px solid rgba(219, 226, 235, 0.12);
  }
`;

export const FaqQuestion = styled.div<FaqQuestionProps>`
  display: flex;
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.019px;
  color: ${props => props.theme.colours.fontPrimary};
  padding-right: 80px;
  position: relative;
  cursor: pointer;
  margin-bottom: ${props => (props.active ? '16px' : 0)};
  transition: all ${props => (props.active ? '1s' : '0s')} ease;
  svg {
    position: absolute;
    right: 0;
  }
  @media (max-width: 1199px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.016px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.013px;
  }
`;

export const FaqAns = styled.div<FaqAnsProps>`
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.014px;
  color: ${props => props.theme.colours.fontPrimary};
  opacity: ${props => (props.active ? props.theme.opacity.DARK : 0)};
  padding-right: 30%;
  height: ${props => (props.active ? '100px' : 0)};
  transform: translateY(0%);
  transition: all 0.5s ease-out;
  @media (max-width: 1199px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.013px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    letter-spacing: -0.011px;
  }
  animation: 1s anim-lineDown ease-out;
  animation-delay: 2s;
  overflow: hidden;
  .active {
    transition-delay: 1s;
    animation: 1s anim-lineUp ease-out;
  }

  @keyframes anim-lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 0.7;
      transform: translateY(0%);
    }
    100% {
      opacity: 0.7;
      transform: translateY(0%);
    }
  }
  @keyframes anim-lineDown {
    0% {
      opacity: 0.7;
      transform: translateY(0%);
    }
    20% {
      opacity: 0.7;
      transform: translateY(0%);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(80%);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
  gap: 120px;
  @media (max-width: 1199px) {
    gap: 60px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SupportWrapper = styled.div`
  display: flex;
  width: 35%;
  gap: 40px;
  flex-direction: column;
  margin-top: 24px;
  @media (max-width: 1199px) {
    width: 45%;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
    flex-direction: column;
    gap: 36px;
    margin-top: 40px;
  }
`;

export const Cta = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 370px;
  height: 67px;
  cursor: pointer;
  background-color: ${props => props.theme.colours.CTA_PRIMARY};
  border-radius: 56px;
  color: inherit;
  border: none;
  outline: inherit;
  color: ${props => props.theme.colours.BLACK};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  @media (max-width: 1199px) {
    width: 298px;
    height: 64px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.014px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.013px;
  }
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
  svg {
    margin-right: 8px;
  }
`;

export const CtaGhost = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: 67px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 56px;
  color: inherit;
  border: none;
  outline: inherit;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${props => props.theme.colours.CTA_PRIMARY};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  transition: all 0.5s ease;
  @media (max-width: 1199px) {
    width: 298px;
    height: 64px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.014px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.013px;
  }
  svg {
    transition: all 0.5s ease;
    margin-right: 8px;
    path {
      transition: all 0.5s ease;
      fill: #ffc400;
    }
  }
  &:hover {
    background: #ffc400;
    color: #000;
    span {
      color: #000;
    }
  }
  &:hover svg path {
    fill: #000;
  }
`;
export const SubTitle = styled.div`
  color: ${props => props.theme.colours.fontPrimary};
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.56px;
  @media (max-width: 1199px) {
    width: 100%;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: -0.48px;
  }
  @media (max-width: 767px) {
    width: 100%;
    font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: center;
  }
`;

export const Desc = styled.div`
  color: ${props => props.theme.colours.fontPrimary};
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.014px;
  margin-top: 12px;
  width: 600px;
  opacity: 0.7;
  @media (max-width: 1199px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.013px;
  }
  @media (max-width: 767px) {
    width: auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    letter-spacing: -0.011px;
    text-align: center;
  }
`;
export const SupportTime = styled.div`
  color: ${props => props.theme.colours.fontPrimary};
  font-family: ${props => props.theme.theme.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.014px;
  opacity: ${props => props.theme.opacity.MEDIUM};
  margin-top: 12px;
  @media (max-width: 1199px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.013px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    letter-spacing: -0.011px;
    text-align: center;
  }
`;
