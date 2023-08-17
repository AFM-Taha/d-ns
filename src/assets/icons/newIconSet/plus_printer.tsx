import React from 'react'
import { ADIconProps } from '@/types/Icons/icons'

export function ADPlus({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M11 1V21'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 11H1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADArrowDown({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M26 11L16 21L6 11'
        stroke={color || '#25252E'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADArrowLeft({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 18'
      fill='none'
    >
      <path
        d='M9.01 17.01L1 8.99999L9.01 0.98999'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 9H1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADArrowMultipllcation({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M21 1L1 21'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 21L1 1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADArrowCheck({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 16'
      fill='none'
    >
      <path
        d='M1 9.42999L6.71 15.14L21 0.859985'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADArrowDropdown({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 14'
      fill='none'
    >
      <path
        d='M21 1.38L11 12.63L1 1.38H21Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADFilledArrowDropdown({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 14'
      fill={color || '#232323'}
    >
      <path
        d='M21 1.38L11 12.63L1 1.38H21Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADMinus({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 2'
      fill='none'
    >
      <path
        d='M21 1H1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADPrinter({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.40039 10.2901C5.40039 9.95871 5.66902 9.69008 6.00039 9.69008H26.0004C26.3318 9.69008 26.6004 9.95871 26.6004 10.2901V20.2901C26.6004 20.6215 26.3318 20.8901 26.0004 20.8901H22.4304C22.099 20.8901 21.8304 20.6215 21.8304 20.2901C21.8304 19.9587 22.099 19.6901 22.4304 19.6901H25.4004V10.8901H6.60039V19.6901H9.57039C9.90176 19.6901 10.1704 19.9587 10.1704 20.2901C10.1704 20.6215 9.90176 20.8901 9.57039 20.8901H6.00039C5.66902 20.8901 5.40039 20.6215 5.40039 20.2901V10.2901Z'
        fill={color || '#232323'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.69857 15.9013C9.74684 15.6121 9.99713 15.4001 10.2904 15.4001H21.7104C22.0036 15.4001 22.2539 15.6121 22.3022 15.9013L23.7322 24.4713C23.7612 24.6453 23.7122 24.8233 23.5982 24.9579C23.4842 25.0925 23.3168 25.1701 23.1404 25.1701H8.86039C8.684 25.1701 8.51654 25.0925 8.40254 24.9579C8.28854 24.8233 8.23954 24.6453 8.26857 24.4713L9.69857 15.9013ZM10.7986 16.6001L9.5688 23.9701H22.432L21.2022 16.6001H10.7986Z'
        fill={color || '#232323'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.75373 7.16175C9.85537 6.95848 10.0631 6.83008 10.2904 6.83008H21.7104C21.9377 6.83008 22.1454 6.95848 22.247 7.16175L23.677 10.0217C23.77 10.2077 23.7601 10.4286 23.6508 10.6055C23.5415 10.7824 23.3483 10.8901 23.1404 10.8901H8.86039C8.65244 10.8901 8.45932 10.7824 8.35 10.6055C8.24068 10.4286 8.23074 10.2077 8.32373 10.0217L9.75373 7.16175ZM10.6612 8.03008L9.83121 9.69008H22.1696L21.3396 8.03008H10.6612Z'
        fill={color || '#232323'}
      />
    </svg>
  )
}
