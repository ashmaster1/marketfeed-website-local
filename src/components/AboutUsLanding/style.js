import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px ${rem(75)} 0 ${rem(75)};
  background-image: url('https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716')
    no-repeat;
  background-position: 10% -60%;
  background: linear-gradient(180deg, #121212 0%, #000000 100%);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 108px ${rem(24)} 0 ${rem(24)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 768px;
  max-width: 1140px;
  gap: ${rem(50)};
  width: 100%;
  position: relative;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 20px;
  }
`;

export const LeftDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
  .boldText {
    h1{
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.BOLD};
      font-size: ${props => props.theme.theme.fontSizes.H1};
    }
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: ${props => props.theme.theme.fontSizes.H3};
    }
  }

  .tradeDescription {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    opacity: ${props => props.theme.opacity.DARK};
    margin-bottom: 40px;
    @media (max-width: 768px) {
      padding: 0 20px;
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  width: 33%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30%;
    align-items: center;
  }
  .socialIcon {
    width: 36px;
    height: 36px;
  }

  .socialDescription {
    display: flex;
    flex-direction: column;

    .socialCount {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.BOLD};
      font-size: ${props => props.theme.theme.fontSizes.XXL};
      opacity: ${props => props.theme.opacity.DARKEST};
      @media (max-width: 768px) {
        font-size: ${props => props.theme.theme.fontSizes.XL};
      }
    }

    .socialName {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
      font-size: ${props => props.theme.theme.fontSizes.S};
      opacity: ${props => props.theme.opacity.DARK};
      @media (max-width: 768px) {
        font-size: ${props => props.theme.theme.fontSizes.XS};
      }
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  min-width: 45%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
  .imageRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;

    .imageColumn1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      width: 34.2%;

      .image1 {
        width: 100%;
        height: 320px;
        flex: auto;
        border-radius: 24px;
        object-fit: cover;
        @media (max-width: 768px) {
          height: 195px;
          border-radius: 14px;
        }
      }
    }
    .imageColumn2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      width: 65.8%;
      min-height: 320px;
      justify-content: center;
      .image2 {
        width: 100%;
        height: 59.375%;
        flex: auto;
        border-radius: 24px;
        max-height: 190px;
        object-fit: cover;
        @media (max-width: 768px) {
          max-height: 114px;
          border-radius: 14px;
        }
      }

      .image3 {
        width: 100%;
        max-height: 114px;
        height: 35.625%;
        flex: auto;
        border-radius: 24px;
        object-fit: cover;
        @media (max-width: 768px) {
          max-height: 68px;
          border-radius: 14px;
        }
      }
    }
  }
`;

export const MissionVision = styled.div`
  width: 100%;
  max-width: 940px;
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  margin-bottom: -8%;
  display: flex;
  flex-direction: row;
  z-index: 10;
  border-radius: 36px;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    top: 2px;
    left: 2px;
    background: linear-gradient(216.94deg, #1a1a1a 0%, #101010 100%);
    border-radius: 36px;
    @media (max-width: 768px) {
      border-radius: 20px;
    }
  }
  @media (max-width: 768px) {
    border-radius: 20px;
    flex-direction: column;
    width: 100%;
    margin-bottom: -46%;
  }

  .mission {
    position: relative;
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
    background: rgba(0, 0, 0, 0.2);
    padding: 40px 100px 60px 80px;
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      padding: 24px 28px;
      width: 100%;
      text-align: center;
      border-top-left-redius: 36px;
      border-top-right-redius: 36px;
      border-bottom-left-radius: 0;
    }
  }

  .vision {
    position: relative;
    border-top-right-redius: 36px;
    border-bottom-right-radius: 36px;
    padding: 40px 80px 60px 80px;
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      padding: 24px 28px;
      width: 100%;
      text-align: center;
    }
  }

  .head {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
    font-size: ${props => props.theme.theme.fontSizes.H3};
    margin-bottom: 8px;
    @media (max-width: 768px) {
      font-size: ${props => props.theme.theme.fontSizes.XL};
    }
  }

  .desc {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    opacity: ${props => props.theme.opacity.MEDIUM};
    @media (max-width: 768px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
  }
`;
