import React from 'react'
import { ADIconProps } from '@/types/Icons/icons'

export function ADCategories({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 23 16'
      fill='none'
    >
      <path
        d='M6.97949 1.33002H21.9795'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.97949 8H21.9795'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.97949 14.67H21.9795'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.9998 2.53C2.31806 2.53 2.62329 2.40358 2.84833 2.17853C3.07338 1.95349 3.1998 1.64826 3.1998 1.33C3.1998 1.01174 3.07338 0.70652 2.84833 0.481477C2.62329 0.256433 2.31806 0.130005 1.9998 0.130005C1.68154 0.130005 1.37632 0.256433 1.15128 0.481477C0.926233 0.70652 0.799805 1.01174 0.799805 1.33C0.799805 1.64826 0.926233 1.95349 1.15128 2.17853C1.37632 2.40358 1.68154 2.53 1.9998 2.53Z'
        fill='#232323'
      />
      <path
        d='M1.9998 9.19999C2.31806 9.19999 2.62329 9.07356 2.84833 8.84852C3.07338 8.62347 3.1998 8.31825 3.1998 7.99999C3.1998 7.68173 3.07338 7.3765 2.84833 7.15146C2.62329 6.92642 2.31806 6.79999 1.9998 6.79999C1.68154 6.79999 1.37632 6.92642 1.15128 7.15146C0.926233 7.3765 0.799805 7.68173 0.799805 7.99999C0.799805 8.31825 0.926233 8.62347 1.15128 8.84852C1.37632 9.07356 1.68154 9.19999 1.9998 9.19999Z'
        fill='#232323'
      />
      <path
        d='M1.9998 15.87C2.31806 15.87 2.62329 15.7436 2.84833 15.5186C3.07338 15.2935 3.1998 14.9883 3.1998 14.67C3.1998 14.3518 3.07338 14.0465 2.84833 13.8215C2.62329 13.5965 2.31806 13.47 1.9998 13.47C1.68154 13.47 1.37632 13.5965 1.15128 13.8215C0.926233 14.0465 0.799805 14.3518 0.799805 14.67C0.799805 14.9883 0.926233 15.2935 1.15128 15.5186C1.37632 15.7436 1.68154 15.87 1.9998 15.87Z'
        fill='#232323'
      />
    </svg>
  )
}

export function ADTrash({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 20"
      fill="none">
      <path
        d="M1 2.08002H21"
        stroke={color || '#232323'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9201 6.69V15.78C17.9201 16.2029 17.8368 16.6216 17.675 17.0122C17.5132 17.4029 17.276 17.7579 16.977 18.0569C16.678 18.3559 16.323 18.5931 15.9323 18.7549C15.5417 18.9167 15.1229 19 14.7001 19H7.30008C6.44608 19 5.62706 18.6608 5.02319 18.0569C4.41933 17.453 4.08008 16.634 4.08008 15.78V6.69"
        stroke={color || '#232323'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 19V6.69"
        stroke={color || '#232323'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.41 2C12.4705 1.84028 12.501 1.67078 12.5 1.5C12.5 1.10218 12.342 0.720644 12.0607 0.43934C11.7794 0.158035 11.3978 0 11 0C10.6022 0 10.2207 0.158035 9.93936 0.43934C9.65806 0.720644 9.50002 1.10218 9.50002 1.5C9.49905 1.67078 9.52956 1.84028 9.59002 2"
        fill={color || '#232323'}
      />
    </svg>
  );
}

export function ADHamburgerMenu({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 18'
      fill='none'
    >
      <path
        d='M1 1.5H21'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 9H21'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 16.5H21'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADFolder({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 18'
      fill='none'
    >
      <path
        d='M10.64 2.92998L9.57 0.789978H1V2.92998V3.63998V17.21H21V2.92998H10.64Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADDocument({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 22'
      fill='none'
    >
      <path
        d='M15.3299 5V21H0.669922V1H11.3299L15.3299 5Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 7H8'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 11H12'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 15H12'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADMenu({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M8.5 1H1V8.5H8.5V1Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 1H13.5V8.5H21V1Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 13.5H1V21H8.5V13.5Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 13.5H13.5V21H21V13.5Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADSearch({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M9.28 17.56C13.8529 17.56 17.56 13.8529 17.56 9.28C17.56 4.70708 13.8529 1 9.28 1C4.70708 1 1 4.70708 1 9.28C1 13.8529 4.70708 17.56 9.28 17.56Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.0001 21L15.1201 15.12'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADCalender({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M20.5102 3.34003H1.49023V21H20.5102V3.34003Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.5102 3.34003H1.49023V8.77003H20.5102V3.34003Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.57031 3.34V1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.4307 3.34V1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADFilledMenu({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M8.5 1H1V8.5H8.5V1Z'
        fill='#232323'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 1H13.5V8.5H21V1Z'
        fill='#232323'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 13.5H1V21H8.5V13.5Z'
        fill='#232323'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 13.5H13.5V21H21V13.5Z'
        fill='#232323'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
