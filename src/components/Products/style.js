import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 366px;
  position: absolute;
  top: -100px;
  width: 1000px;
  margin: auto;
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  padding: 1px;
  border-radius: 36px;
  overflow: hidden;

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

  @media (max-width: 767px) {
    position: relative;
    flex-direction: Column;
    width: calc(100% - 48px);
    margin: auto;
    height: auto;
    top: 0;
    border-radius: 20px;
  }
`;

export const Product = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  padding-left: 80px;
  align-items: flex-start;
  background-color: ${props =>
    props.type === 'strategy' ? `rgba(0, 0, 0, 0.2)` : `transparent`};
  border-radius: ${props =>
    props.type === 'strategy' ? `32px 0px 0px 32px` : `0px 32px 32px 0px`};
  &:hover {
    background: linear-gradient(160.14deg, #4485f7 -16.91%, #293eaa 82.2%);
    @media (max-width: 767px) {
      background: ${props =>
        props.type === 'strategy' ? `rgba(0, 0, 0, 0.2)` : `transparent`};
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    border-radius: 0;
    padding: 36px 36px 10px;
    align-items: center;
  }

  .title {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
    font-size: ${props => props.theme.theme.fontSizes.H2_BOLD};
    color: ${props => props.theme.colours.fontPrimary};
    text-align: start;
    color: #fff;
    position: absolute;
    transform: translateY(62px);
    transition: all 0.5s ease;
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XXL};
      transform: translateY(0px);
      position: relative;
      margin-top: 16px;
      text-align: center;
    }
  }
  &:hover .title {
    transform: translateY(0px);
  }

  .desc {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    color: #fff;
    color: ${props => props.theme.colours.fontPrimary};
    margin-top: 50px;
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease;
    transition-delay: 0s;
    text-align: left;
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
      opacity: 0.7;
      visibility: visible;
      margin-top: 10px;
      text-align: center;
    }
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
  &:hover .desc {
    opacity: ${props => props.theme.opacity.DARK};
    visibility: visible;

    @media (min-width: 1028px) {
      animation: 1s anim-lineUp ease-out;
    }
  }

  svg {
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease;
  }

  &:hover svg {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.5);
    @media (max-width: 767px) {
      opacity: 1;
      transform: scale(1);
      visibility: visible;
    }
  }
  .underline {
    width: 80px;
    height: 4px;
    background-color: #283daa;
    margin-top: 20px;
    transition: all 0.5s ease;
    @media (max-width: 767px) {
      width: 0;
    }
  }
  &:hover .underline {
    width: 0;
  }
`;
