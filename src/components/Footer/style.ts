import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

interface RowTypes {
  type?: String;
}
interface ColumnProps {
  iFrame?: Boolean;
}
export const Container = styled.div`
  width: 100vw;
`;
export const Row = styled.div<RowTypes>`
  display: flex;
  align-self: center;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  max-width: 1100px;
  background: ${props => (props.type === 'footer' ? '#0F1120' : 'initial')};
  padding: ${rem(125)} ${rem(40)};
  @media (max-width: 1199px) {
    padding: 40px 83px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

export const LinkRow = styled.div`
  display: flex;
  flex-direction: row
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 767px) {
    justify-content: flex-start;
    gap: 20px;
  }
`
export const SocialRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div<ColumnProps>`
  display: ${props => (props.iFrame ? 'none' : 'flex')};
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 767px) {
    margin-right: 45px;
    margin-bottom: 20px;
  }
  .desc {
    max-width: ${rem(264)};
    color: #fff;
    font-size: ${rem(16)};
    font-weight: 500;
    font-family: 'Satoshi-Regular';
    margin: ${rem(8)} 0;
    opacity: 0.8;
  }
  a {
    text-decoration: none;
    margin-bottom: 0.25rem;
  }
  p {
    line-height: 24px;
  }
`;

export const SocialMediaIcons = styled.div``;

export const SocialIcon = styled.a`
  cursor: pointer;
  margin-right: 20px;

  // @media (min-width: 1920px) {
  //   margin-right: ${rem(16, 'large')};
  // }
  // @media (min-width: 2560px) {
  //   margin-right: ${rem(16, 'extraLarge')};
  // }
  // @media (min-width: 3840px) {
  //   margin-right: ${rem(16, 'xxl')};
  // }
`;
export const SubHeading = styled.div`
  color: #56535f;
  opacity: 0.6;
  font-weight: ${props => props.theme.theme.fontWeights.BOLD};
  font-size: ${rem(18)};
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: ${rem(5, 'large')};
  @media (min-width: 768px) {
    font-size: ${rem(20)};
    margin-bottom: ${rem(10, 'large')};
  }
  @media (min-width: 1920px) {
    font-size: ${rem(24, 'large')};
    margin-bottom: ${rem(16, 'large')};
  }
  @media (min-width: 2560px) {
    font-size: ${rem(24, 'extraLarge')};
    margin-bottom: ${rem(16, 'extraLarge')};
  }
  @media (min-width: 3840px) {
    font-size: ${rem(24, 'xxl')};
    margin-bottom: ${rem(16, 'xxl')};
  }
`;
export const FooterLink = styled.div`
  text-decorations: none;
  color: #fff;
  opacity: 0.8;
  font-family: 'Satoshi-Regular';
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: 1.3;
  cursor: ${props => props?.unclickable ? 'none' : 'pointer'}pointer;
  margin-bottom: ${rem(8)};
  trasnsition: all 0.5s ease;
  &:hover {
    color: ${props => props?.unclickable ? '#fff' : '#4485f7'}pointer;
    color: #4485f7;
  }
  @media (min-width: 768px) {
    margin-bottom: ${rem(8)};
    font-size: ${rem(16)};
  }
  @media (min-width: 1920px) {
    font-size: ${rem(14, 'large')};
    margin-bottom: ${rem(12, 'large')};
  }
  @media (min-width: 2560px) {
    font-size: ${rem(14, 'extraLarge')};
    margin-bottom: ${rem(12, 'extraLarge')};
  }
  @media (min-width: 3840px) {
    font-size: ${rem(14, 'xxl')};
    margin-bottom: ${rem(12, 'xxl')};
  }
`;
export const Copyright = styled.div`
  width: calc(100vw + 40px);
  text-align: center;
  color: #fff;
  font-family: 'Satoshi-Regular';
  align-self: center;
  font-size: ${rem(16)};
  margin: ${rem(16)} 0 0 -20px;
  padding: 16px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #121212;

  svg {
    margin: 0 5px;

    @media (min-width: 1920px) {
      margin: 0 ${rem(5, 'large')};
    }
    @media (min-width: 2560px) {
      margin: 0 ${rem(5, 'extraLarge')};
    }
    @media (min-width: 3840px) {
      margin: 0 ${rem(5, 'xxl')};
    }
  }
`;
