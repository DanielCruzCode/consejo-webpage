import { SVGProps } from "react";

export const BunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={26}
    fill="none"
    {...props}
  >
    <path
      fill="#8D99AE"
      d="m29.5 11.5 8-10.5 2 2-10 8.5 11.5-7 2 2-13.5 5 16-3 3 3h-19Z"
    />
    <path
      stroke="#8D99AE"
      d="m29.5 11.5 8-10.5 2 2-10 8.5Zm0 0 11.5-7 2 2-13.5 5Zm0 0 16-3 3 3h-19Z"
    />
    <path
      fill="#8D99AE"
      d="M20.5 11.5 12.5 1l-2 2 10 8.5L9 4.5l-2 2 13.5 5-16-3-3 3h19Z"
    />
    <path
      stroke="#8D99AE"
      d="M20.5 11.5 12.5 1l-2 2 10 8.5Zm0 0L9 4.5l-2 2 13.5 5Zm0 0-16-3-3 3h19Z"
    />
    <path
      fill="#8D99AE"
      d="m29.5 14 8 10.5 2-2-10-8.5L41 21l2-2-13.5-5 16 3 3-3h-19Z"
    />
    <path
      stroke="#8D99AE"
      d="m29.5 14 8 10.5 2-2-10-8.5Zm0 0L41 21l2-2-13.5-5Zm0 0 16 3 3-3h-19Z"
    />
    <path
      fill="#8D99AE"
      d="m20.5 14-8 10.5-2-2 10-8.5L9 21l-2-2 13.5-5-16 3-3-3h19Z"
    />
    <path
      stroke="#8D99AE"
      d="m20.5 14-8 10.5-2-2 10-8.5Zm0 0L9 21l-2-2 13.5-5Zm0 0-16 3-3-3h19Z"
    />
    <path fill="#8D99AE" d="m25 8.964 3.536 3.536L25 16.035 21.465 12.5z" />
  </svg>
);

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 24V0h24v24z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1C1B1F"
        d="M22.191 7.988 12 18.185 1.809 7.988l1.966-1.966L12 14.247l8.225-8.225 1.966 1.966Z"
      />
    </g>
  </svg>
);

export const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M24 0v24H0V0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1C1B1F"
        d="M1.809 16.012 12 5.815l10.191 10.197-1.966 1.966L12 9.753l-8.225 8.225-1.966-1.966Z"
      />
    </g>
  </svg>
);
