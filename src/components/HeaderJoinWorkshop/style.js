import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  position: absolute;
  bottom: 80px;
  display: flex;
  align-items: center;
  width: 90%;
  padding: ${rem(36)} 0;
  margin-top: 56px;
  opacity: 0;
  transition: all 0.5s ease;
  transition-delay: 0.5s;
  transform: scale(0.9);
  &.active {
    transform: scale(1);
    opacity: 1;
  }

  @media (max-width: 767px) {
    padding: 0px 0 20px 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: linear-gradient(
    114.02deg,
    #626262 0%,
    #212121 26.03%,
    #313131 99.97%
  );
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  position: relative;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 20px 20px;
  }
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

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
  .title {
    text-align: center;
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
    font-size: ${props => props.theme.theme.fontSizes.XS};
    margin-bottom: 16px;
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
  border-radius: 16px;
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
  border: 1px solid
    ${props =>
      props.type === 'ghost' ? props.theme.colours.CTA_PRIMARY : 'transparent'};
  transition: all 0.5s ease;
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
