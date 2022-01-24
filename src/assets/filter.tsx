import React from 'react';

const Filter = ({ className }: { className?: string }) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.981 7c4.97 0 9-.895 9-2s-4.03-2-9-2-9 .895-9 2 4.03 2 9 2Z"
      stroke="#6F6E73"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.981 5c0 2.23 3.871 6.674 5.856 8.805a4.197 4.197 0 0 1 1.144 2.852V22l4-2v-3.343c0-1.061.421-2.075 1.144-2.852 1.986-2.131 5.856-6.574 5.856-8.805"
      stroke="#6F6E73"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Filter;
