import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${rem(426)} 0 ${rem(160)};
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #121212 0%, #000000 100%);
  position: relative;
  &:before {
    content: url('https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716');
    position: absolute;
    transform: rotate(90deg);
    left: -572px;
    top: 248px;
    opacity: 0.3;
  }
  &:after {
    content: url('https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716');
    position: absolute;
    right: -572px;
    bottom: -416px;
  }
  @media (max-width: 767px) {
    padding: 0;
    background: transparent;
  }
`;

export const Title = styled.span`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.H1};
  color: ${props => props.theme.colours.fontPrimary};
  margin-bottom: 60px;
  line-height: 70px;
  letter-spacing: -0.04em;

  @media (max-width: 767px) {
    font-size: ${props => props.theme.theme.fontSizes.H3};
    margin-top: 80px;
    margin-bottom: 36px;
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
  width: 968px;
  margin: auto;
  @media (max-width: 767px) {
    width: 100%;
    padding: 24px;
    gap: 40px 24px;
    margin-bottom: 36px;
  }

  .path {
    position: absolute;
    top: 60px;
    left: 30px;
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
  }
  .stepTitle {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XXXL};
    margin-bottom: 12px;
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.S};
    }
  }

  .stepDesc {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.S};
    opacity: ${props => props.theme.opacity.MEDIUM};
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
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
    content: '';
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
    @media (max-width: 767px) {
      width: 22px;
      height: 22px;
      border-radius: 11px;
      font-size: ${props => props.theme.theme.fontSizes.XXXS};
    }
    background-image: linear-gradient(
      304.07deg,
      #293eaa 10.34%,
      #4485f7 115.99%
    );
    span {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.BOLD};
      font-size: ${props => props.theme.theme.fontSizes.XL};
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XXXS};
      }
    }
  }
`;

export const Cta = styled.button`
  background-color: inherit;
  border: none;
  outline: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  width: 294px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  cursor: pointer;
  margin-top: 100px;
  span {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    color: ${props => props.theme.colours.CTA_PRIMARY};
    @media (max-width: 767px) {
      color: #171725;
    }
  }
  &:hover {
    background: #ffc400;
    color: #000;
    span {
      color: #000;
    }
  }
  @media (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 40px;
    background-color: #fec33b;
    border-radius: 12px;
    z-index: 1;
  }
`;
