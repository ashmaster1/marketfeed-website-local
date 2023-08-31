import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  @media (max-width: 1199px) {
    padding: ${rem(40)} ${rem(24)};
  }
  @media (max-width: 767px) {
    padding: ${rem(40)} ${rem(24)};
  }
`;

export const Information = styled.div`
  padding: 40px 60px;
  width: 100%;
  max-width: 1000px;
  margin-auto;
  background-color: ${props => props.theme.colours.SURFACE};
  border-radius: 32px;
  @media (max-width: 767px) {
    padding: ${rem(24)} ${rem(20)};
    border-radius: 20px;
  }
  .title {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    color: #4485f7;
    margin-bottom: 8px;
    position: relative;
    
    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: normal;
        letter-spacing: -0.013px;
        text-transform: uppercase;
    }
    @media (max-width: 767px) {
        font-size: 14px;
        letter-spacing: -0.011px;
        text-transform: uppercase;
    }
  }
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  border-radius: 36px;
  position: relative;
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

export const TitleAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 36px;
  position: relative;

  .workshop {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
    font-size: ${props => props.theme.theme.fontSizes.H2_BOLD};
    color: ${props => props.theme.colours.fontPrimary};
    @media (max-width: 1199px) {
        font-size: 24px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        letter-spacing: -0.48px;
      }
    @media (max-width: 767px) {
        font-size: 22px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        letter-spacing: -0.44px;
    }
  }
  .author {
    display: flex;
    flex-direction: row;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    opacity: ${props => props.theme.opacity.DARK};
    gap: 10px;

    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
    img {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      object-fit: cover;
      object-position: 0px 1px;
      background: rgba(255, 255, 255, 0.1);
      @media (max-width: 767px) {
        width: 24px;
        height: 24px;
      }
    }
  }
  .desc {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    opacity: ${props => props.theme.opacity.DARK};
    color: #fff;
    @media (max-width: 1199px) {
        font-size: ${props => props.theme.theme.fontSizes.XS};
      }
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
  }
`;

export const TimeVenue = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 80px;
  position: relative;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
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
        width: 52px;
        height: 52px;
        border-radius: 26px;
      }

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
      font-size: ${props => props.theme.theme.fontSizes.XL};
      @media (max-width: 1199px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.013px;
      }
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XS};
      }
    }

    .description {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
      font-size: ${props => props.theme.theme.fontSizes.S};
      opacity: ${props => props.theme.opacity.DARK};
      @media (max-width: 1199px) {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.01px;
      }
      @media (max-width: 767px) {
        font-size: ${props => props.theme.theme.fontSizes.XXS};
      }
    }
  }
`;

export const Division = styled.div`
  height: 1px;
  width: 100%;
  margin: 36px 60px 36px 0;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  @media (max-width: 767px) {
    margin: 20px 60px 20px 0;
  }
`;

export const Title = styled.div`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.H1};
  margin-bottom: 60px;
  @media (max-width: 767px) {
    font-size: ${props => props.theme.theme.fontSizes.H3};
    margin-bottom: 36px;
    text-align: center;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  position: relative;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .attendees {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.M};
    opacity: ${props => props.theme.opacity.DARK};
    @media (max-width: 1199px) {
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.01px;
      }
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justifycontent: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
  button {
    @media (max-width: 767px) {
      margin-bottom: 20px;
      margin-left: 0;
    }
  }
  button:nth-last-child(1) {
    @media (max-width: 767px) {
      margin-bottom: 0;
    }
  }
`;

export const Cta = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  height: 67px;
  cursor: pointer;
  position: relative;
  background-color: ${props =>
    props.type === 'ghost' ? 'transparent' : props.theme.colours.CTA_PRIMARY};
  border-radius: 36px;
  color: inherit;
  border: none;
  outline: inherit;
  color: ${props =>
    props.type === 'ghost'
      ? props.theme.colours.CTA_PRIMARY
      : props.theme.colours.BLACK};
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  margin-left: 16px;
  border: 1px solid
    ${props =>
      props.type === 'ghost' ? 'rgba(256,256,256,0.3)' : 'transparent'};
  transition: all 0.5s ease;
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
    font-size: ${props => props.theme.theme.fontSizes.S};
    margin-top: 0;
    width: 100%;
    height: 60px;
  }
  @media (max-width: 767px) {
    font-size: ${props => props.theme.theme.fontSizes.S};
    margin-top: 0;
    width: 100%;
    height: 54px;
  }

  &:hover {
    content: '';
    background-color: ${props => props.theme.colours.CTA_PRIMARY};
    color: ${props => props.theme.colours.BLACK};
  }
`;
