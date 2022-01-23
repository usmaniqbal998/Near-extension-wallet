import React from 'react';

const CloseIco = (props: { className?: string; onClick?: () => void }) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.12}
      d="M12.981 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z"
      fill="#6F6E73"
    />
    <path
      d="M17.717 7.264a.9.9 0 0 1 0 1.272L14.254 12l3.463 3.464a.9.9 0 0 1 .08 1.18l-.08.092a.9.9 0 0 1-1.272 0l-3.464-3.463-3.464 3.463a.9.9 0 1 1-1.272-1.272L11.708 12 8.245 8.536a.9.9 0 0 1-.081-1.18l.08-.092a.9.9 0 0 1 1.273 0l3.464 3.463 3.464-3.463a.9.9 0 0 1 1.272 0Z"
      fill="#6F6E73"
    />
  </svg>
);

export default CloseIco;
