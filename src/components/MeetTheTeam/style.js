import styled from 'styled-components';

import { rem } from '../../utils/remConverter';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #181818 0%, rgba(24, 24, 24, 0) 100%);
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 280px ${rem(100)} ${rem(120)} ${rem(100)};
  position: relative;

  &:before {
    content: url('https://marketfeed-app.gumlet.io/marketfeed-website/bg-grid.png?width=1074&height=716');
    position: absolute;
    transform: rotate(90deg);
    left: -572px;
    top: 248px;
    opacity: 0.3;
  }
  @media (max-width: 768px) {
    padding: 240px ${rem(24)} ${rem(40)} ${rem(24)};
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 35px;
  }
  .titleColumn {
    display: flex;
    flex-direction: column;
    width: 30%;
    @media (max-width: 768px) {
      align-items: center;
      width: 100%;
    }
    .title {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.BOLDER};
      font-size: ${props => props.theme.theme.fontSizes.H1};
      @media (max-width: 768px) {
        text-align: center;
        font-size: ${props => props.theme.theme.fontSizes.H3};
      }
    }

    .desc {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
      font-size: ${props => props.theme.theme.fontSizes.XL};
      opacity: ${props => props.theme.opacity.DARK};
      @media (max-width: 768px) {
        text-align: center;
        font-size: ${props => props.theme.theme.fontSizes.XS};
      }
    }
  }

  .founderColumn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 80px;
    max-width: 1000px;
    margin: auto;
    @media (max-width: 1024px) {
      gap: 60px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    .founder {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      cursor: pointer;
      .dp {
        position: relative;
        width: 230px;
        height: 260px;
        border-radius: 24px;
        overflow: hidden;
        background: linear-gradient(
          141.41deg,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(217, 217, 217, 0.1) 33.05%,
          rgba(217, 217, 217, 0.12) 100%
        );

        img {
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 1px;
        }
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 1px;
          left: 1px;
          background: linear-gradient(141.47deg, #27282d 0%, #111113 100%);
          border-radius: 24px;
        }

        @media (max-width: 768px) {
          &:before {
            width: 100%;
            height: 100%;
            top: 1px;
            left: 1px;
          }
        }
      }

      .name {
        font-family: ${props => props.theme.theme.fontFamily};
        font-weight: ${props => props.theme.theme.fontWeights.BOLD};
        font-size: ${props => props.theme.theme.fontSizes.XXXL};
        opacity: ${props => props.theme.opacity.DARKEST};
        line-height: 32px;
        letter-spacing: -0.0008em;
        margin-top: 20px;
        margin-bottom: 4px;
        transition: all 0.5s ease;
        @media (max-width: 768px) {
          font-size: ${props => props.theme.theme.fontSizes.XXL};
        }
      }

      .desig {
        font-family: ${props => props.theme.theme.fontFamily};
        font-weight: ${props => props.theme.theme.fontWeights.REGULAR};
        font-size: ${props => props.theme.theme.fontSizes.M};
        opacity: ${props => props.theme.opacity.DARK};
        @media (max-width: 768px) {
          font-size: ${props => props.theme.theme.fontSizes.M};
        }
      }

      .linkedin {
        position: absolute;
        bottom: 0px;
        width: 100%;
        opacity: 0;
        padding: 20px 0;
        z-index: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;
        transition: 0.3s ease-in-out;
        transform: translateY(10px);
        span {
          font-family: ${props => props.theme.theme.fontFamily};
          font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
          font-size: ${props => props.theme.theme.fontSizes.S};
        }
      }
    }

    .founder:hover .linkedin {
      bottom: 0px;
      transform: translateY(0px);
      opacity: 1;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }

    .founder:hover .dp {
      background: linear-gradient(
        141.41deg,
        rgba(49, 94, 172, 0.9) 0%,
        rgba(49, 94, 172, 0.4) 26.19%,
        rgba(49, 94, 172, 0.3) 100%
      );
    }

    .founder:hover .dp:before {
      background: linear-gradient(141.47deg, #0e1b31 0%, #0e1726 100%);
    }

    .founder:hover .name {
      color: ${props => props.theme.colours.CTA_PRIMARY};
    }
  }
`;

export const Team = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  margin: 120px 0;
  align-self: center;
  justify-content: center;
  max-width: 1000px;
  margin: 120px auto 0;
  @media (max-width: 768px) {
    gap: 40px;
    margin: 50px 0;
  }
  .member {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 40%;
    }
    .dp {
      position: relative;
      width: 160px;
      height: 160px;
      border-radius: 24px;
      overflow: hidden;
      background: linear-gradient(
        141.41deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(217, 217, 217, 0.1) 100%
      );

      img {
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 1px;
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 1px;
        left: 1px;
        background: linear-gradient(141.47deg, #27282d 0%, #111113 100%);

        border-radius: 24px;
      }

      @media (max-width: 768px) {
        width: 112px;
        height:112px;
        &:before {
          width: 100%;
          height: 100%;
          top: 1px;
          left: 1px;
        }
      }

      .wrapper {
        align-items: center;
        position: relative;
        img {
          width: 160px;
          height: 160px;
          border-radius: 24px;
          margin-bottom: 20px;
          object-fit: cover;
          @media (max-width: 768px) {
            width: 112px;
            height: 112px;
          }
        }
      }
    }

    .name {
      text-align: center;
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.BOLD};
      font-size: ${props => props.theme.theme.fontSizes.XXXL};
      opacity: ${props => props.theme.opacity.DARKEST};
      margin-top: 20px;
      transition: all 0.5s ease;
      @media (max-width: 768px) {
        font-size: ${props => props.theme.theme.fontSizes.S};
      }
    }

    .desig {
      font-family: ${props => props.theme.theme.fontFamily};
      font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
      font-size: ${props => props.theme.theme.fontSizes.M};
      opacity: ${props => props.theme.opacity.DARK};
      @media (max-width: 768px) {
        font-size: ${props => props.theme.theme.fontSizes.XXS};
      }
    }

    .linkedin {
      position: absolute;
      bottom: 0px;
      width: 100%;
      opacity: 0;
      padding: 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transition: 0.3s ease-in-out;
      transform: translateY(10px);
      z-index: 1;
      span {
        flex: none;
        font-family: ${props => props.theme.theme.fontFamily};
        font-weight: ${props => props.theme.theme.fontWeights.MEDIUM};
        font-size: ${props => props.theme.theme.fontSizes.S};
        @media (max-width: 768px) {
          font-size: ${props => props.theme.theme.fontSizes.XXS};
        }
      }
      svg{
        flex: none;
        margin-left: 2px;
      }
    }
  }

  .member:hover .linkedin {
    transform: translateY(0px);
    opacity: 1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }

  .member:hover .dp {
    background: linear-gradient(
      141.41deg,
      rgba(49, 94, 172, 0.9) 0%,
      rgba(49, 94, 172, 0.4) 26.19%,
      rgba(49, 94, 172, 0.3) 100%
    );
  }

  .member:hover .dp:before {
    background: linear-gradient(141.47deg, #0e1b31 0%, #0e1726 100%);
  }

  .member:hover .name {
    color: ${props => props.theme.colours.CTA_PRIMARY};
  }
}
`;

export const Cta = styled.a`
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
  transition: all 0.5s ease;
  margin-top: 100px;
  &:hover {
    background: #ffc400;
    color: #000;
    span {
      color: #000;
    }
  }
  span {
    font-family: ${props => props.theme.theme.fontFamily};
    font-weight: ${props => props.theme.theme.fontWeights.BOLD};
    font-size: ${props => props.theme.theme.fontSizes.XL};
    color: ${props => props.theme.colours.CTA_PRIMARY};
    @media (max-width: 768px) {
      font-size: ${props => props.theme.theme.fontSizes.S};
    }
  }
  @media (max-width: 768px) {
    height: 54px;
    width: 208px;
    margin-top: 0px;
  }
`;
