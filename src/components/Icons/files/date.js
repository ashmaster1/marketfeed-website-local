import React from 'react';

export const date = props => {
  return (
    <svg
      width={props.width || '28'}
      height={props.height || '27'}
      viewBox='0 0 28 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity={props.opacity || '0.5'}>
        <path
          d='M8.45312 2.36279V5.69613'
          stroke={props.color || 'white'}
          stroke-width='1.66667'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M17.3594 2.36279V5.69613'
          stroke={props.color || 'white'}
          stroke-width='1.66667'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M3.45312 10.2534H22.342'
          stroke={props.color || 'white'}
          stroke-width='1.66667'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M22.9063 9.58497V19.0294C22.9063 22.3628 21.2396 24.585 17.3507 24.585H8.46181C4.57292 24.585 2.90625 22.3628 2.90625 19.0294V9.58497C2.90625 6.25164 4.57292 4.02942 8.46181 4.02942H17.3507C21.2396 4.02942 22.9063 6.25164 22.9063 9.58497Z'
          stroke={props.color || 'white'}
          stroke-width='1.66667'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M26.2303 20.1754C26.2303 23.2421 23.7414 25.731 20.6747 25.731C17.608 25.731 15.1191 23.2421 15.1191 20.1754C15.1191 17.1088 17.608 14.6199 20.6747 14.6199C23.7414 14.6199 26.2303 17.1088 26.2303 20.1754Z'
          fill={props.bg || '#313235'}
          stroke={props.color || 'white'}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M22.7257 21.9452L21.0034 20.9174C20.7034 20.7396 20.459 20.3119 20.459 19.9619V17.6841'
          stroke={props.color || 'white'}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
    </svg>
  );
};
