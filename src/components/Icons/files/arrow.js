import React from 'react';

export const arrow = props => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.43 6.43005L20.5 12.5001L14.43 18.5701'
        stroke={props.color || '#292D32'}
        stroke-width='2.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M3.5 12.5H20.33'
        stroke={props.color || '#292D32'}
        stroke-width='2.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
