import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px ${rem(220)} 80px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #000000 0%, #121212 100%);
  position: relative;

  @media (max-width: 767px) {
    padding: 40px 24px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  width: 100%;
  gap: 24px;
  position: relative;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Title = styled.span`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.H1};
  color: ${props => props.theme.colours.fontPrimary};
  margin-bottom: 12px;
  @media (max-width: 767px) {
    font-size: ${props => props.theme.theme.fontSizes.H3};
  }
`;

export const SubTitle = styled.span`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  color: ${props => props.theme.colours.fontPrimary};
  opacity: ${props => props.theme.opacity.DARK};
  margin-bottom: 60px;
  @media (max-width: 767px) {
    font-size: ${props => props.theme.theme.fontSizes.XS};
  }
`;

export const Strategy = styled.div`
  display: flex;
  width: ${rem(399)};
  align-items: center;
  flex-direction: column;
  padding: 50px 40px;
  border-radius: 32px;
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
  @media (max-width: 767px) {
    width: 100%;
    padding: 24px 20px;
    border-radius: 20px;
  }

  &:hover > .know-more-cta {
    background: #ffc400;
    color: #000;
    span {
      color: #000;
    }
  }
`;

export const Highlight = styled.div`
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(93.06deg, #283daa 11.87%, #4385f7 93.92%);
  border-radius: 60px;
  padding: 6px 16px;
  margin-bottom: 12px;
  position: relative;

  span {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XXS};
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XXS};
    }
  }
`;

export const Details = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${props => (props.type === 'title' ? '36px' : '24px')};
  .title {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
    font-size: ${props => props.theme.theme.fontSizes.H2_BOLD};
    color: ${props => props.theme.colours.fontPrimary};
    margin-bottom: 4px;
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XXL};
    }
  }

  .subtitle {
    position: relative;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.M};
    color: ${props => props.theme.colours.fontPrimary};
    opacity: ${props => props.theme.opacity.DARK};
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
  }

  .returns {
    position: relative;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.XXL};
    color: ${props => props.theme.colours.fontPrimary};
    margin-right: 10px;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XL};
    }
  }

  .description {
    position: relative;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    opacity: ${props => props.theme.opacity.MEDIUM};
    @media (max-width: 767px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
    }
  }
`;

export const Cta = styled.a`
  background-color: inherit;
  position: relative;
  border: none;
  outline: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.5s ease;
  span {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    color: ${props => props.theme.colours.CTA_PRIMARY};
  }
  @media (max-width: 767px) {
    border-radius: 12px;
  }
`;

export const Warning = styled.div`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  color: rgba(255, 255, 255, 0.3);
  margin-top: 24px;
  @media (max-width: 767px) {
    font-size: ${props => props.theme.theme.fontSizes.XS};
  }
`;
