import React from 'react'
import { ADIconProps } from '@/types/Icons/icons'

export function ADLoading({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M30 16C30 17.8385 29.6379 19.659 28.9343 21.3576C28.2308 23.0561 27.1995 24.5995 25.8995 25.8995C24.5995 27.1995 23.0561 28.2307 21.3576 28.9343C19.659 29.6379 17.8385 30 16 30C14.1615 30 12.341 29.6379 10.6424 28.9343C8.94387 28.2307 7.40052 27.1995 6.1005 25.8995C4.80048 24.5995 3.76925 23.0561 3.06569 21.3576C2.36212 19.659 2 17.8385 2 16C2 14.1615 2.36212 12.341 3.06569 10.6424C3.76926 8.94387 4.80049 7.40052 6.10051 6.1005C7.40053 4.80048 8.94388 3.76925 10.6424 3.06568C12.341 2.36212 14.1615 2 16 2C17.8385 2 19.659 2.36212 21.3576 3.06569C23.0561 3.76926 24.5995 4.80049 25.8995 6.10051C27.1995 7.40053 28.2308 8.94388 28.9343 10.6424C29.6379 12.341 30 14.1615 30 16L30 16Z'
        stroke='#EDF6FF'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 2C17.8385 2 19.659 2.36212 21.3576 3.06569C23.0561 3.76925 24.5995 4.80049 25.8995 6.10051C27.1995 7.40053 28.2308 8.94388 28.9343 10.6424C29.6379 12.341 30 14.1615 30 16'
        stroke={color || '#0072BC'}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADFrame({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 20'
      fill='none'
    >
      <path
        d='M10.9999 19.0429L1.5459 15.9601L1.5459 2.99169L10.9999 0.957031L20.4539 2.99169V15.9601L10.9999 19.0429ZM10.9999 19.0429V5.70458M1.78225 3.21777L10.9999 5.4785L20.2175 3.21777'
        stroke='#25252E'
        strokeWidth='1.2'
      />
      <path
        d='M6.88965 1.77917L15.9326 4.03702V17.8098'
        stroke='#25252E'
        strokeWidth='1.2'
      />
    </svg>
  )
}

export function ADCard({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <mask
        id='mask0_13922_470269'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={width}
        height={height}
      >
        <path d='M32 0H0V32H32V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_13922_470269)'>
        <path
          d='M21.28 15.1799H6V24.7699H21.28V15.1799Z'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.69984 15.18L8.08984 14.69L14.1298 7.22998L25.9998 16.85L21.2798 22.68'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M21.28 17.61H6V19.72H21.28V17.61Z'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export function ADVan({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <mask
        id='mask0_13961_459265'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={width}
        height={height}
      >
        <path d='M32 0H0V32H32V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_13961_459265)'>
        <path
          d='M22.5009 22.4953H20.5M20.5 12.4948H24.5005L28.4997 18.4948V22.4953H26.5047'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.5 22.4953H20.5005L20.4992 9.49597H5.50027V12.4948M5.49902 19.4953L5.50027 22.4953H9.49827'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.50133 12.4948H3.50293'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.5005 17.4948H4.5'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.49965 19.4952H2.5'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.5 15.4948V17.4956'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M24.5031 20.4956C24.8991 20.4956 25.2862 20.613 25.6154 20.833C25.9446 21.053 26.2013 21.3657 26.3528 21.7315C26.5043 22.0974 26.544 22.4999 26.4667 22.8883C26.3895 23.2767 26.1988 23.6334 25.9188 23.9134C25.6388 24.1934 25.2821 24.3841 24.8937 24.4614C24.5053 24.5386 24.1028 24.499 23.7369 24.3474C23.3711 24.1959 23.0584 23.9393 22.8384 23.61C22.6184 23.2808 22.501 22.8937 22.501 22.4977C22.5009 22.2348 22.5526 21.9744 22.6532 21.7314C22.7538 21.4885 22.9012 21.2677 23.0872 21.0818C23.2731 20.8959 23.4938 20.7484 23.7368 20.6478C23.9797 20.5472 24.2401 20.4955 24.5031 20.4956Z'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.4989 24.4973C12.604 24.4973 13.4998 23.6015 13.4998 22.4965C13.4998 21.3914 12.604 20.4956 11.4989 20.4956C10.3939 20.4956 9.49805 21.3914 9.49805 22.4965C9.49805 23.6015 10.3939 24.4973 11.4989 24.4973Z'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export function ADUTurn({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <mask
        id='mask0_13961_459281'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={width}
        height={height}
      >
        <path d='M32 0H0V32H32V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_13961_459281)'>
        <path
          d='M25.4991 25.4991H14.4981C12.3766 25.4991 10.342 24.6563 8.84189 23.1562C7.34178 21.6561 6.49902 19.6215 6.49902 17.5C6.49902 15.3786 7.34178 13.344 8.84189 11.8438C10.342 10.3437 12.3766 9.50098 14.4981 9.50098H25.5028'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19.5 3.49963L25.5001 9.49971'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19.5 15.4998L25.5001 9.49976'
          stroke={color || '#232323'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export function ADArrRight({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <mask
        id='mask0_13961_459257'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={width}
        height={height}
      >
        <path d='M32 0H0V32H32V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_13961_459257)'>
        <path
          d='M18.2305 8.22998L26.0005 16L18.2305 23.77'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 16H26'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export function ADCart({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 26 19'
      fill='none'
    >
      <path
        d='M11.5 19C12.3284 19 13 18.3284 13 17.5C13 16.6716 12.3284 16 11.5 16C10.6716 16 10 16.6716 10 17.5C10 18.3284 10.6716 19 11.5 19Z'
        fill={color || '#232323'}
      />
      <path
        d='M18.5 19C19.3284 19 20 18.3284 20 17.5C20 16.6716 19.3284 16 18.5 16C17.6716 16 17 16.6716 17 17.5C17 18.3284 17.6716 19 18.5 19Z'
        fill={color || '#232323'}
      />
      <path
        d='M1 1H5.55L9.2625 12.7548H20.375L25 1'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
