import React from "react";
import BarProgressProps from "./interface";

const BarProgress = ({ perCent, width = 550 }: BarProgressProps) => (
  <svg
    width={width}
    height="20"
    viewBox="0 0 710 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_305_262)">
      <rect x="39" y="3" width="667" height="12" rx="4" fill="white" />
    </g>
    <rect y="3" width={perCent} height="12" rx="4" fill="#A4D47C" />
    <defs>
      <filter
        id="filter0_d_305_262"
        x="35"
        y="0"
        width="675"
        height="20"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.643137 0 0 0 0 0.831373 0 0 0 0 0.486275 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_305_262"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_305_262"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BarProgress;
