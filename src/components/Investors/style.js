import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  width: 100vw;
  background: #0f0f0f;
  padding: ${rem(120)} ${rem(150)};
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: ${rem(20)} ${rem(100)};
  }
  @media (max-width: 767px) {
    padding: ${rem(20)} ${rem(20)};
    padding-top: 40px;
  }
  @media (min-width: 1920px) {
    padding: ${rem(120, 'large')} ${rem(150, 'large')};
  }
  @media (min-width: 2560px) {
    padding: ${rem(120, 'extraLarge')} ${rem(150, 'extraLarge')};
  }
  @media (min-width: 3840px) {
    padding: ${rem(120, 'xxl')} ${rem(150, 'xxl')};
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
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Column = styled.div`
  width: 33%;
  padding: ${rem(25)};
  @media (max-width: 767px) {
    width: 50%;
    border-top: ${props => {
      if (props.className === 'column_5' || props.className === 'column_6') {
        return '1px solid #333333';
      }
    }};
    border-bottom: ${props => {
      if (props.className === 'column_1' || props.className === 'column_2') {
        return '1px solid #333333';
      }
    }};
    border-left: ${props => {
      if (
        props.className === 'column_4' ||
        props.className === 'column_6' ||
        props.className === 'column_2'
      ) {
        return '1px solid #333333';
      }
    }};
  }
  @media (min-width: 768px) {
    padding: 40px;
    border-bottom: ${props => {
      if (props.className === 'column_1' || props.className === 'column_3') {
        return '1px solid transparent';
      }
    }};

    border-bottom: ${props => {
      if (props.className === 'column_2') {
        return '1px solid rgba(51, 51, 51, 1)';
      }
    }};

    border-left: ${props => {
      if (props.className === 'column_3' || props.className === 'column_6') {
        return '1px solid transparent';
      }
    }};
    border-right: ${props => {
      if (props.className === 'column_1' || props.className === 'column_4') {
        return '1px solid transparent';
      }
    }};
    border-image: ${props => {
      if (props.className === 'column_1' || props.className === 'column_3') {
        return 'linear-gradient(180deg, rgba(51, 51, 51, 0) 0%, #333333 17.71%, #333333 85.42%, rgba(51, 51, 51, 1) 100%) 10;';
      }
    }};
    border-image: ${props => {
      if (props.className === 'column_4' || props.className === 'column_6') {
        return 'linear-gradient(360deg, rgba(51, 51, 51, 0) 0%, #333333 17.71%, #333333 85.42%, rgba(51, 51, 51, 1) 100%) 10;';
      }
    }};
  }

  @media (min-width: 1920px) {
    padding: ${rem(25, 'large')};
  }
  @media (min-width: 2560px) {
    padding: ${rem(25, 'extraLarge')};
  }
  @media (min-width: 3840px) {
    padding: ${rem(25, 'xxl')};
  }
`;
