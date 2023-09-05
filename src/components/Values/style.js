import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px ${rem(150)};
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #121212;
  @media (max-width: 768px) {
    padding: 80px 24px 0 24px;
  }
`;

export const Title = styled.span`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
  font-size: ${props => props.theme.theme.fontSizes.H1};
  color: ${props => props.theme.colours.fontPrimary};
  @media (max-width: 768px) {
    font-size: ${props => props.theme.theme.fontSizes.H3};
  }
  margin-bottom: 12px;
`;

export const SubTitle = styled.span`
  font-family: ${props => props.theme.theme.fontFamily};
  font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
  font-size: ${props => props.theme.theme.fontSizes.XL};
  color: ${props => props.theme.colours.fontPrimary};
  opacity: ${props => props.theme.opacity.MEDIUM};
  margin-bottom: 60px;
  @media (max-width: 768px) {
    font-size: ${props => props.theme.theme.fontSizes.XS};
    padding: 0 44px;
  }
`;

export const WorkFlow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
    flex-direction: column;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 28%;
  @media (max-width: 768px) {
    width: 100%;
  }
  .stepTitle {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XXL};
    @media (max-width: 768px) {
      font-size: ${props => props.theme.theme.fontSizes.S};
    }
    margin-bottom: 12px;
    margin-top: 12px;
  }

  .stepDesc {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.S};
    opacity: ${props => props.theme.opacity.MEDIUM};
    @media (max-width: 768px) {
      font-size: ${props => props.theme.theme.fontSizes.XS};
      padding: 0 44px;
    }
  }
`;
