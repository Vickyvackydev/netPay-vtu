import Image from "next/image";
import React from "react";

function Logo({ size }: { size: number }) {
  return (
    <svg
      width="180"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="50" height="30" rx="8" fill="url(#grad1)" />
      <circle cx="55" cy="25" r="5" fill="white" />

      <text
        x="70"
        y="35"
        font-family="Arial, sans-serif"
        font-size="24"
        font-weight="bold"
        fill="url(#grad2)"
      >
        NetPay
      </text>

      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFA500" />
          <stop offset="100%" stop-color="#FF8C00" />
        </linearGradient>
        <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFA500" />
          <stop offset="100%" stop-color="#FF4500" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
