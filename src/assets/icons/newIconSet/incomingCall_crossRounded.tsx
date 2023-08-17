import React from 'react'
import { ADIconProps } from '@/types/Icons/icons'

export function ADIncomingCall({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M17.8103 12.92C17.6172 12.7077 17.3828 12.5369 17.1214 12.4183C16.8601 12.2997 16.5773 12.2356 16.2903 12.23C16.0021 12.2371 15.7183 12.3018 15.4555 12.4203C15.1928 12.5388 14.9564 12.7087 14.7603 12.92L13.3403 14.33L13.0003 14.15C12.8403 14.07 12.6803 13.99 12.5503 13.91C11.1485 12.9983 9.90537 11.8633 8.8703 10.55C8.38723 9.96749 7.9806 9.32562 7.6603 8.64C8.0303 8.31 8.3703 7.96 8.6603 7.64L9.0303 7.26C9.25117 7.06665 9.42816 6.82833 9.54943 6.56101C9.6707 6.29369 9.73343 6.00354 9.73343 5.71C9.73343 5.41646 9.6707 5.12631 9.54943 4.85899C9.42816 4.59167 9.25117 4.35335 9.0303 4.16L7.8503 2.92L7.4303 2.49C7.1703 2.21 6.8803 1.93 6.5903 1.66C6.39693 1.45551 6.1646 1.29177 5.90699 1.17843C5.64939 1.06508 5.37171 1.00441 5.0903 1C4.51675 1.01242 3.97096 1.2494 3.5703 1.66V1.66L2.0003 3.2C1.42382 3.75182 1.06829 4.49488 1.0003 5.29C0.951941 6.42554 1.1498 7.55811 1.5803 8.61C2.38091 10.7001 3.53807 12.6355 5.0003 14.33C6.92146 16.6346 9.30658 18.5086 12.0003 19.83C13.2483 20.4677 14.6053 20.8646 16.0003 21H16.2803C16.7649 21.0114 17.2462 20.9181 17.6915 20.7266C18.1367 20.535 18.5354 20.2497 18.8603 19.89V19.89C19.1055 19.6029 19.3694 19.3323 19.6503 19.08L20.2303 18.5C20.4569 18.3029 20.6418 18.0625 20.7741 17.7929C20.9063 17.5232 20.9832 17.2298 21.0003 16.93C20.994 16.6402 20.9296 16.3547 20.8111 16.0902C20.6926 15.8257 20.5223 15.5876 20.3103 15.39L17.8103 12.92Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.7607 7.01995H14.9307V2.19995'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.9607 1L14.9307 7.02'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADComment({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height='18'
      viewBox='0 0 22 18'
      fill='none'
    >
      <path
        d='M6.9998 8.65C7.31806 8.65 7.62329 8.52357 7.84833 8.29853C8.07338 8.07348 8.1998 7.76826 8.1998 7.45C8.1998 7.13174 8.07338 6.82652 7.84833 6.60147C7.62329 6.37643 7.31806 6.25 6.9998 6.25C6.68154 6.25 6.37632 6.37643 6.15128 6.60147C5.92623 6.82652 5.7998 7.13174 5.7998 7.45C5.7998 7.76826 5.92623 8.07348 6.15128 8.29853C6.37632 8.52357 6.68154 8.65 6.9998 8.65Z'
        fill='#232323'
      />
      <path
        d='M10.9998 8.65C11.3181 8.65 11.6233 8.52357 11.8483 8.29853C12.0734 8.07348 12.1998 7.76826 12.1998 7.45C12.1998 7.13174 12.0734 6.82652 11.8483 6.60147C11.6233 6.37643 11.3181 6.25 10.9998 6.25C10.6815 6.25 10.3763 6.37643 10.1513 6.60147C9.92623 6.82652 9.7998 7.13174 9.7998 7.45C9.7998 7.76826 9.92623 8.07348 10.1513 8.29853C10.3763 8.52357 10.6815 8.65 10.9998 8.65Z'
        fill='#232323'
      />
      <path
        d='M14.9998 8.65C15.3181 8.65 15.6233 8.52357 15.8483 8.29853C16.0734 8.07348 16.1998 7.76826 16.1998 7.45C16.1998 7.13174 16.0734 6.82652 15.8483 6.60147C15.6233 6.37643 15.3181 6.25 14.9998 6.25C14.6815 6.25 14.3763 6.37643 14.1513 6.60147C13.9262 6.82652 13.7998 7.13174 13.7998 7.45C13.7998 7.76826 13.9262 8.07348 14.1513 8.29853C14.3763 8.52357 14.6815 8.65 14.9998 8.65Z'
        fill='#232323'
      />
      <path
        d='M6.15001 14.25H20.2C20.4122 14.25 20.6157 14.1657 20.7657 14.0157C20.9157 13.8657 21 13.6622 21 13.45V1.45002C21 1.23785 20.9157 1.03437 20.7657 0.884339C20.6157 0.73431 20.4122 0.650024 20.2 0.650024H1.80001C1.58784 0.650024 1.38435 0.73431 1.23432 0.884339C1.08429 1.03437 1.00001 1.23785 1.00001 1.45002V16.55C0.999315 16.7021 1.04201 16.8513 1.12309 16.98C1.20417 17.1088 1.32026 17.2117 1.45777 17.2768C1.59527 17.3419 1.74848 17.3664 1.89943 17.3475C2.05038 17.3286 2.1928 17.267 2.31001 17.17L5.64001 14.43C5.7831 14.3111 5.96398 14.2473 6.15001 14.25V14.25Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADSms({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height='16'
      viewBox='0 0 22 16'
      fill='none'
    >
      <path
        d='M20.2 1.19995H1.8C1.35817 1.19995 1 1.55812 1 1.99995V14C1 14.4418 1.35817 14.8 1.8 14.8H20.2C20.6418 14.8 21 14.4418 21 14V1.99995C21 1.55812 20.6418 1.19995 20.2 1.19995Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.26953 1.3999L10.4395 9.4599C10.5903 9.60415 10.7909 9.68467 10.9995 9.68467C11.2082 9.68467 11.4088 9.60415 11.5595 9.4599L20.7295 1.3999'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADNotification({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 21'
      fill='none'
    >
      <path
        d='M12.3405 19.1H20.5205L17.6705 15.76V9.57C17.6707 8.05103 17.151 6.57774 16.1977 5.39518C15.2443 4.21262 13.9149 3.39207 12.4305 3.07V2.43C12.4305 2.05074 12.2798 1.68701 12.0116 1.41884C11.7435 1.15066 11.3797 1 11.0005 1C10.6212 1 10.2575 1.15066 9.98931 1.41884C9.72113 1.68701 9.57047 2.05074 9.57047 2.43V3.07C8.08603 3.39207 6.75659 4.21262 5.80327 5.39518C4.84994 6.57774 4.33019 8.05103 4.33047 9.57V15.76L1.48047 19.1H12.3405Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.4303 19.57C12.4303 19.9492 12.2797 20.313 12.0115 20.5811C11.7433 20.8493 11.3796 21 11.0003 21C10.6211 21 10.2574 20.8493 9.98918 20.5811C9.721 20.313 9.57034 19.9492 9.57034 19.57C9.56928 19.4089 9.59986 19.2492 9.66034 19.1H12.3403C12.4008 19.2492 12.4314 19.4089 12.4303 19.57Z'
        fill='#232323'
      />
    </svg>
  )
}

export function ADProfile({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <mask
        id='mask0_13961_459306'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={width}
        height={height}
      >
        <path d='M32 0H0V32H32V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_13961_459306)'>
        <path
          d='M7.92007 26V24.06C7.91035 22.8481 8.37723 21.6809 9.22007 20.81C10.0976 19.9179 11.1426 19.2077 12.2951 18.7202C13.4476 18.2327 14.685 17.9774 15.9364 17.9691C17.1877 17.9607 18.4285 18.1994 19.5874 18.6715C20.7463 19.1435 21.8007 19.8397 22.6901 20.72C23.1305 21.1577 23.48 21.678 23.7185 22.2512C23.9571 22.8244 24.08 23.4392 24.0801 24.06V26'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.0004 14.7C18.4028 14.7 20.3504 12.7524 20.3504 10.35C20.3504 7.94756 18.4028 6 16.0004 6C13.598 6 11.6504 7.94756 11.6504 10.35C11.6504 12.7524 13.598 14.7 16.0004 14.7Z'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export function ADOutgoingCall({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height='22'
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M17.8103 12.92C17.6172 12.7077 17.3828 12.5369 17.1214 12.4183C16.8601 12.2997 16.5773 12.2356 16.2903 12.23C16.0021 12.2371 15.7183 12.3018 15.4555 12.4203C15.1928 12.5388 14.9564 12.7087 14.7603 12.92L13.3403 14.33L13.0003 14.15C12.8403 14.07 12.6803 13.99 12.5503 13.91C11.1485 12.9983 9.90537 11.8633 8.8703 10.55C8.38723 9.96749 7.9806 9.32562 7.6603 8.64C8.0303 8.31 8.3703 7.96 8.6603 7.64L9.0303 7.26C9.25117 7.06665 9.42816 6.82833 9.54943 6.56101C9.6707 6.29369 9.73343 6.00354 9.73343 5.71C9.73343 5.41646 9.6707 5.12631 9.54943 4.85899C9.42816 4.59167 9.25117 4.35335 9.0303 4.16L7.8503 2.92L7.4303 2.49C7.1703 2.21 6.8803 1.93 6.5903 1.66C6.39693 1.45551 6.1646 1.29177 5.90699 1.17843C5.64939 1.06508 5.37171 1.00441 5.0903 1C4.51675 1.01242 3.97096 1.2494 3.5703 1.66V1.66L2.0003 3.2C1.42382 3.75182 1.06829 4.49488 1.0003 5.29C0.951941 6.42554 1.1498 7.55811 1.5803 8.61C2.38091 10.7001 3.53807 12.6355 5.0003 14.33C6.92146 16.6346 9.30658 18.5086 12.0003 19.83C13.2483 20.4677 14.6053 20.8646 16.0003 21H16.2803C16.7649 21.0114 17.2462 20.9181 17.6915 20.7266C18.1367 20.535 18.5354 20.2497 18.8603 19.89V19.89C19.1055 19.6029 19.3694 19.3323 19.6503 19.08L20.2303 18.5C20.4569 18.3029 20.6418 18.0625 20.7741 17.7929C20.9063 17.5232 20.9832 17.2298 21.0003 16.93C20.994 16.6402 20.9296 16.3547 20.8111 16.0902C20.6926 15.8257 20.5223 15.5876 20.3103 15.39L17.8103 12.92Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.1299 1H20.9499V5.82'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.9307 7.02L20.9507 1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADGraph({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M18.3896 13.47H13.6396V26H18.3896V13.47Z'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.4102 16.9301H6.66016V26.0001H11.4102V16.9301Z'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M25.3701 10.02H20.6201V26H25.3701V10.02Z'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.6299 6C16.4799 8.85 13.4899 11.44 9.53988 12.67C8.75305 12.9217 7.94707 13.109 7.12988 13.23'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.2305 6.61L17.6305 6L18.2405 9.41'
        stroke={color || '#232323'}
        strokeWidth='1.3'
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
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M6 8.37H26'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 13.46H20.74'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 18.54H26'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 23.63H20.74'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADCrossRounded({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none">
      <mask
        id="mask0_13961_459180"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}>
        <path d="M32 0H0V32H32V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_13961_459180)">
        <path
          d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z"
          stroke={color || '#232323'}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.04 12.04L19.96 19.96"
          stroke={color || '#232323'}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.96 12.04L12.04 19.96"
          stroke={color || '#232323'}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
