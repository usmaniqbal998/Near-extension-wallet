import * as React from 'react';

const DocuSign = () => (
  <svg width={69} height={69} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={69}
      height={69}
    >
      <rect width={69} height={69} rx={10} fill="#C4C4C4" />
    </mask>
    <g filter="url(#b)" mask="url(#a)">
      <g filter="url(#c)">
        <path fill="#BB85FF" d="M-3-3h75v75H-3z" />
        <path stroke="#CCC" d="M-3.5-3.5h76v76h-76z" />
      </g>
      <path
        d="M20.71 41.017c-.798 3.822-1.656 7.781-3.755 11.302-.377.631-.844 1.329-.658.276.17-.96.483-1.707 1.418-2.441 4.708-3.696 10.121-7.072 13.732-11.281.344-.402 3.234-3.8-.038-3.054-4.16.95-7.414 3.493-10.046 5.416-3.726 2.724-7.33 5.632-9.557 8.998-.465.702.39.966 1.635 1.092 2.225.227 4.026-.54 5.904-.884.727-.133 1.181-.15 1.469.259.4.568 3.116-.04 3.552-.159.96-.261 1.64-.683 2.882-.464 1.473.26 2.685-.122 3.922-.392 2.5-.547 4.764-1.311 7.384-1.717.68-.105.325.3.762.536"
        stroke="#414047"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="m40.847 44.956 1.67 4.588 4.589-1.67 8.607-18.458-6.259-2.918-8.607 18.458Zm17.122-20.38a1.297 1.297 0 0 0-.627-1.725l-3.906-1.82a1.297 1.297 0 0 0-1.725.627l-1.424 3.054 6.258 2.919 1.424-3.055Z"
        fill="#414047"
      />
    </g>
    <defs>
      <filter
        id="b"
        x={-8}
        y={-4}
        width={85}
        height={85}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_988" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_988"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        x={-8}
        y={-4}
        width={85}
        height={85}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_988" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_988"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default DocuSign;
