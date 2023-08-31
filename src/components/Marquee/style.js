import styled from 'styled-components';

export const MarqueeContainer = styled.a`
    overflow-x: hidden !important;
    display: flex !important;
    flex-direction: row !important;
    z-index: 200;
    width: 100%;
    position: fixed;
    top: 0;
    background: #3F3F3F;
    .marquee {
        flex: 0 0 auto;
        justify-content: space-between;
        min-width: auto;
        z-index: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        animation: scroll 50s linear 0s infinite;
        animation-play-state: running;
        animation-delay: 0;
        animation-direction: normal;
      
        @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        
      }
`

export const MarqueeChildren = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px 10px;

    .child{
        color: var(--lm-white, #FFF);
        font-family: Satoshi-Variable;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.1px;
        @media (max-width: 1199px){
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.1px;
        }
        @media (max-width: 767px){
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.1px;
        }
        
    }
`