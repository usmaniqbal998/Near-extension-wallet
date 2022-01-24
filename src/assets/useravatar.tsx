import React from 'react';

const UserAvatar = () => (
  <svg width={31} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx={15.981}
      cy={15}
      r={14}
      fill="#fff"
      stroke="#33373B"
      strokeWidth={2}
    />
    <circle cx={15.981} cy={15} r={10.833} fill="#C4C4C4" />
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={5}
      y={4}
      width={22}
      height={22}
    >
      <circle cx={15.981} cy={15} r={10.833} fill="#C4C4C4" />
    </mask>
    <g mask="url(#a)">
      <rect
        x={-21.096}
        y={14.517}
        width={33.143}
        height={32}
        rx={6}
        transform="rotate(-34 -21.096 14.517)"
        fill="#39C0BA"
      />
      <rect
        x={10.341}
        y={24.338}
        width={33.143}
        height={32}
        rx={6}
        transform="rotate(-79 10.341 24.338)"
        fill="#FFCE20"
      />
      <rect
        x={31.011}
        y={52.938}
        width={33.143}
        height={32}
        rx={6}
        transform="rotate(-112 31.01 52.938)"
        fill="#BB85FF"
      />
      <rect
        x={21.87}
        y={58.118}
        width={33.143}
        height={32}
        rx={6}
        transform="rotate(-154 21.87 58.118)"
        fill="#FF8B20"
      />
    </g>
  </svg>
);

export default UserAvatar;
