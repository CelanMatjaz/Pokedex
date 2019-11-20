import React from 'react';

export default {
  Plus: (
    <svg
      width="30"
      height="30"
      style={{ backgroundColor: 'dodgerblue', borderRadius: '4px' }}
    >
      <rect
        stroke="white"
        style={{ fill: 'white' }}
        x="13"
        y="5"
        width="4"
        height="20"
      ></rect>
      <rect
        stroke="white"
        style={{ fill: 'white' }}
        x="5"
        y="13"
        width="20"
        height="4"
      ></rect>
    </svg>
  ),
  Minus: (
    <svg
      width="30"
      height="30"
      style={{ backgroundColor: 'dodgerblue', borderRadius: '4px' }}
    >
      <rect
        stroke="white"
        style={{ fill: 'white' }}
        x="5"
        y="13"
        width="20"
        height="4"
      ></rect>
    </svg>
  ),
  BackToTop: (
    <svg
      width="30"
      height="30"
      style={{
        backgroundColor: '#313131',
        borderRadius: '4px',
        opacity: '0.5'
      }}
    >
      <polygon points="15,5 25,23 15,19 5,23" style={{ fill: 'white' }} />
    </svg>
  )
};
