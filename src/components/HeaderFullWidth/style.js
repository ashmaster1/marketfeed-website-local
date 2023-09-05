import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  width: 100vw;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .menu {
    animation: fadeIn 0.8s ease-in-out;
  }

  .headerWrapper {
    position: relative;
    z-index: 1000;
    width: 100%;
    background-color: transparent;
    height: 60px;
    padding-top: 20px;
  }
`;

export const CloseButton = styled.div`
  position: relative;
  top: 12px;
  right: 0px;
  z-index: 150;
  margin-right: -20px;
  label {
    display: block;
    cursor: pointer;
    position: absolute;
    width: 30vw;
    height: 30vw;
    max-width: 100px;
    max-height: 100px;
    z-index: 150;
    margin-right: -20px;
  }

  @media (min-aspect-ratio: 1/1) {
    label {
      width: 50vh;
      height: 50vh;
    }
  }

  .menu--1 label,
  .menu--2 label {
    bottom: 0;
  }

  .menu--3 label,
  .menu--4 label {
    top: 0;
  }

  .menu--1 label,
  .menu--3 label {
    right: 0;
  }

  .menu--2 label,
  .menu--4 label {
    left: 0;
  }

  path {
    fill: none;
    stroke: #fff;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    --length: 24;
    --offset: -38;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  circle {
    opacity: 0;
  }

  .cross input:checked + svg {
    .line--1,
    .line--3 {
      --length: 22.627416998;
    }
    .line--2 {
      --length: 0;
    }
  }

  .back input:checked + svg {
    .line--1,
    .line--3 {
      --length: 8.602325267;
    }
  }

  .menu--1 {
    background-color: #3f77e9;
    .line--1,
    .line--3 {
      --total-length: 126.64183044433594;
    }
    .line--2 {
      --total-length: 70;
    }
    input:checked + svg {
      .line--1,
      .line--3 {
        --offset: -94.1149185097;
      }
      .line--2 {
        --offset: -50;
      }
    }
  }
`;

export const BannerContainer = styled.div`
  padding: 12px 150px;

  width: 1440px;
  height: 68px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  width: 100%;
  height: ${rem(72)};
  position: fixed;
  top: 0;
  z-index: 10;
  display: ${props => (props.showBanner ? 'flex' : 'none')};
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  gap: 32px;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #7000ff;
    filter: blur(24px);
  }

  .bannerText {
    font-family: 'Satoshi-Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.0008em;
    font-feature-settings: 'liga' off;

    color: #ffffff;
    width: 442px;
    @media (max-width: 767px) {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.0008em;
      width: 150px;
    }
  }
  .bannerButton {
    background: #ffd600;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 12px 20px;
    font-family: Satoshi-Bold;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.0008em;
    font-feature-settings: 'liga' off;

    color: ${props => (props.fontColor ? props.fontColor : '#ffffff')};
    @media (max-width: 767px) {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.0008em;
      padding: 10px 12px;
    }
  }
  @media (max-width: 767px) {
    height: ${rem(56)};
    margin-bottom: 16px;

    padding: 14px 40px;
    gap: 20px;
  }
`;

export const WhiteBar = styled.div`
  width: 100%;
  height: ${rem(100)};
  position: fixed;
  z-index: -1;
  filter: blur(1px);
  border-radius: 24px;
  left: 0;
  right: 0;
  margin: ${rem(20)} auto;
  overflow: hidden;

  svg,
  rect {
    width: ${rem(1280)};
    height: ${rem(100)};
    -webkit-backdrop-filter: blur(80px);
    backdrop-filter: blur(80px);
    @media (max-width: 767px) {
      margin-top: ${rem(50)};
      width: 95vw;
      height: ${rem(51.2)};
      border-radius: 10px;
    }
  }

  rect {
    position: absolute;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: ${rem(100)};
  position: fixed;
  top: ${props => (props.showBanner ? '72px' : '0')};
  z-index: 11;
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${rem(150)};
  @media (max-width: 1280px) {
    padding: 0 ${rem(75)};
  }

  &.scroll {
    background: #000000cc;
    // border: 2px solid rgba(72, 72, 72, 0.03);
    transition: all 0.5s ease;
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
  }

  .block {
    display: none;
    @media (min-width: 767px) {
      display: flex;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    width: 100vw;
    height: ${rem(61.2)};
    top: ${props => (props.showBanner ? '56px' : '0')};
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    padding: 0 20px;
    width: 100vw;
    margin-top: 56px;
  }
`;

export const NavBar = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  .downloadStore {
    width: ${props => (props.width ? rem(props.width) : rem(90))};
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg:hover {
      fill: #ffff;
      path {
        fill: #637bff;
      }
    }
  }
  &.nav-list > a {
    font-family: 'Satoshi-Variable';
    font-size: ${rem(16)};
    color: ${props => (props.fontPrimary ? props.fontPrimary : '#fff')};
    transition: color 0.3s ease;
    opacity: ${props => props.theme.opacity.DARK};
    position: relative;
    display: flex;
    transition: all 0.5s ease;
    padding-bottom: 6px;
    .c-button_line:before {
      content: '';
      width: 0%;
      height: 2px;
      background: #4485f7;
      transition: all 0.5s ease;
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      margin: auto;
    }
    &:hover .c-button_line:before {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
  }
  @media (max-width: 1199px) {
    gap: 20px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
export const Row = styled.div`
  display: flex;
`;

export const Button = styled.div`
  display: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin: 0 0 0 ${rem(40)};
  cursor: pointer;
  font-family: 'Satoshi-Bold';
  padding: 0 ${rem(28)};
  height: ${rem(56)};
  border-radius: 16px;
  font-size: 16px;
  color: #ffc400;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.5s ease;
  &:hover {
    background: #ffc400;
    color: #000;
  }
  & > svg path {
    transition: all 0.5s ease;
  }
  &:hover > svg path {
    stroke: #111;
  }
  span {
    display: flex;
    & > span {
      margin-left: 4px;
    }
  }
  @media (min-width: 767px) and (max-width: 1199px) {
    font-size: 14px;
    margin-left: 20px;
  }
  &.desktop {
    display: none;
    @media (min-width: 767px) {
      display: block;
    }
  }
  @media (max-width: 767px) {
    height: ${rem(33)};
    width: 158px;
    display: none;
    border-radius: 10px;
    font-size: 12px;
    margin: 0;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const DetailsButton = styled.div`
  display: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin: 0 0 0 ${rem(15)};
  cursor: pointer;
  font-family: 'Satoshi-Bold';

  width: ${rem(223)};
  height: ${rem(54)};
  border-radius: 16px;
  font-size: ${rem(16)};
  color: #171725;
  background-color: #fec33b;
  &:hover {
    background: #fff;
  }
  span {
    display: flex;
    & > span {
      margin-left: 4px;
    }
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    font-size: 10px;
  }
  & .desktop {
    @media (min-width: 767px) {
      display: block;
    }
  }
  @media (max-width: 767px) {
    width: ${rem(110)};
    height: ${rem(35)};
    border-radius: 10px;
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    font-size: ${rem(18)};
  }
`;

export const Drawer = styled.div`
  width: 100vw;
  padding: 20px 80px;
  position: absolute;
  margin-left: -20px;
  background: linear-gradient(180deg, #000000 0%, #121212 100%);
  top: 60px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  height: ${props => (props.isOpen ? '100vh' : '0px')};
  opacity: ${props => (props.isOpen ? '1' : '0')};

  .navigationMobile {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    margin-left: 0px;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    font-family: 'Satoshi-Medium';
    transition: all 0.8s ease;
    opacity: ${props => (props.isOpen ? '1' : '0')};

    a {
      font-family: 'Satoshi-Medium';
      font-size: 20px;
      line-height: 23px;
      color: ##707677;
      & .active {
        color: #171725;
      }
    }

    .seperator {
      height: 1px;
      background: #ffffff;
      opacity: 0.1;
      width: 100%;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
`;
