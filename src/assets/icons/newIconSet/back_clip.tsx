import React from 'react'
import { ADIconProps } from '@/types/Icons/icons'

export function ADBack({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M24.37 19.7C23.6216 18.3343 22.6746 17.0874 21.56 16C20.4057 14.8404 19.0926 13.8505 17.66 13.06C16.9187 12.6609 16.154 12.3069 15.37 12C14.98 11.85 14.57 11.7 14.15 11.57V8.20996L10.07 11.67L6 15.13L10.07 18.58L14.15 22V18.33C14.7328 18.2949 15.3172 18.2949 15.9 18.33C17.1326 18.4089 18.3479 18.6614 19.51 19.08C20.7605 19.5069 21.9377 20.1241 23 20.91C24.1156 21.7418 25.1234 22.7092 26 23.79C25.6288 22.3642 25.0813 20.9902 24.37 19.7V19.7Z'
        stroke={color || '#232323'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADCustomerCare({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M9.51002 19.67H9.09002C8.29959 19.625 7.55632 19.2794 7.01262 18.7039C6.46892 18.1284 6.16602 17.3667 6.16602 16.575C6.16602 15.7833 6.46892 15.0216 7.01262 14.4461C7.55632 13.8706 8.29959 13.5249 9.09002 13.48H9.51002'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 13H10V20H12V13Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22.4902 13.48H22.9102C23.7007 13.5249 24.4439 13.8706 24.9876 14.4461C25.5313 15.0216 25.8342 15.7833 25.8342 16.575C25.8342 17.3667 25.5313 18.1284 24.9876 18.7039C24.4439 19.2794 23.7007 19.625 22.9102 19.67H22.4902'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 20H22V13H20V20Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.51953 13.54C8.92044 11.8465 9.87273 10.3343 11.2267 9.24094C12.5807 8.14762 14.2596 7.53522 15.9995 7.5C17.7341 7.53298 19.4088 8.13963 20.7621 9.22516C22.1154 10.3107 23.071 11.8139 23.4795 13.5'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.7599 21.85H16.7099C15.9753 21.85 15.3799 22.4432 15.3799 23.175C15.3799 23.9068 15.9753 24.5 16.7099 24.5H17.7599C18.4944 24.5 19.0899 23.9068 19.0899 23.175C19.0899 22.4432 18.4944 21.85 17.7599 21.85Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23.4798 19.61V20.5C23.4772 21.209 23.1937 21.8881 22.6914 22.3886C22.1891 22.889 21.5089 23.17 20.7998 23.17H19.0898'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADAddCard({ height, width, color }: ADIconProps) {
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
        d='M6.13965 13.7C6.13965 13.3686 6.40828 13.1 6.73965 13.1H20.9696C21.301 13.1 21.5696 13.3686 21.5696 13.7V22.54C21.5696 22.8713 21.301 23.14 20.9696 23.14C20.6383 23.14 20.3696 22.8713 20.3696 22.54V14.3H7.33965V21.94H14.0496C14.381 21.94 14.6496 22.2086 14.6496 22.54C14.6496 22.8713 14.381 23.14 14.0496 23.14H6.73965C6.40828 23.14 6.13965 22.8713 6.13965 22.54V13.7Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.6504 5.62631C13.8566 5.36728 14.2337 5.32429 14.493 5.53025L25.633 14.3803C25.7577 14.4793 25.8379 14.6238 25.8559 14.782C25.874 14.9402 25.8284 15.0991 25.7292 15.2237L21.4392 20.6137C21.2329 20.873 20.8554 20.9159 20.5961 20.7095C20.3368 20.5031 20.294 20.1257 20.5003 19.8664L24.4163 14.9463L14.2158 6.84265L9.45296 12.8243L9.96342 13.2306C10.2227 13.437 10.2656 13.8144 10.0592 14.0737C9.85286 14.333 9.47539 14.3759 9.21612 14.1695L8.23612 13.3895C8.1116 13.2904 8.03155 13.1459 8.0136 12.9877C7.99564 12.8296 8.04125 12.6708 8.14039 12.5463L13.6504 5.62631Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5102 19.68C15.9307 19.68 14.6502 20.9604 14.6502 22.54C14.6502 24.1195 15.9307 25.4 17.5102 25.4C19.0897 25.4 20.3702 24.1195 20.3702 22.54C20.3702 20.9604 19.0897 19.68 17.5102 19.68ZM13.4502 22.54C13.4502 20.2977 15.2679 18.48 17.5102 18.48C19.7525 18.48 21.5702 20.2977 21.5702 22.54C21.5702 24.7823 19.7525 26.6 17.5102 26.6C15.2679 26.6 13.4502 24.7823 13.4502 22.54Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5102 20.4399C17.8415 20.4399 18.1102 20.7086 18.1102 21.0399V24.0399C18.1102 24.3713 17.8415 24.6399 17.5102 24.6399C17.1788 24.6399 16.9102 24.3713 16.9102 24.0399V21.0399C16.9102 20.7086 17.1788 20.4399 17.5102 20.4399Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.4102 22.5399C15.4102 22.2086 15.6788 21.9399 16.0102 21.9399H19.0102C19.3415 21.9399 19.6102 22.2086 19.6102 22.5399C19.6102 22.8713 19.3415 23.1399 19.0102 23.1399H16.0102C15.6788 23.1399 15.4102 22.8713 15.4102 22.5399Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.13965 16.76C6.13965 16.4287 6.40828 16.16 6.73965 16.16H20.9696C21.301 16.16 21.5696 16.4287 21.5696 16.76C21.5696 17.0914 21.301 17.36 20.9696 17.36H6.73965C6.40828 17.36 6.13965 17.0914 6.13965 16.76Z'
        fill='#232323'
      />
    </svg>
  )
}

export function ADAddAccount({ height, width, color }: ADIconProps) {
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
        d='M21.5302 19.22C19.8237 19.22 18.4402 20.6035 18.4402 22.31C18.4402 24.0166 19.8237 25.4 21.5302 25.4C23.2368 25.4 24.6202 24.0166 24.6202 22.31C24.6202 20.6035 23.2368 19.22 21.5302 19.22ZM17.2402 22.31C17.2402 19.9407 19.1609 18.02 21.5302 18.02C23.8995 18.02 25.8202 19.9407 25.8202 22.31C25.8202 24.6793 23.8995 26.6 21.5302 26.6C19.1609 26.6 17.2402 24.6793 17.2402 22.31Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.2699 10.45C10.6013 10.45 10.8699 10.7186 10.8699 11.05V17.82C10.8699 18.1513 10.6013 18.42 10.2699 18.42C9.93855 18.42 9.66992 18.1513 9.66992 17.82V11.05C9.66992 10.7186 9.93855 10.45 10.2699 10.45Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.5944 5.48356C15.7827 5.37223 16.0166 5.37217 16.205 5.48341L24.755 10.5334C24.9878 10.671 25.0999 10.9473 25.0286 11.2082C24.9573 11.4691 24.7203 11.65 24.4498 11.65H22.1298V16.26C22.1298 16.5914 21.8612 16.86 21.5298 16.86C21.1984 16.86 20.9298 16.5914 20.9298 16.26V11.05C20.9298 10.7187 21.1984 10.45 21.5298 10.45H22.2542L15.9 6.69697L9.55325 10.45H17.6498C17.9812 10.45 18.2498 10.7187 18.2498 11.05V17.82C18.2498 18.1514 17.9812 18.42 17.6498 18.42C17.3184 18.42 17.0498 18.1514 17.0498 17.82V11.65H7.35982C7.08942 11.65 6.85243 11.4692 6.78108 11.2083C6.70974 10.9475 6.82167 10.6712 7.05442 10.5336L15.5944 5.48356Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.11969 19.98C8.11969 19.6486 8.38832 19.38 8.71969 19.38H11.2097C11.5411 19.38 11.8097 19.6486 11.8097 19.98C11.8097 20.3114 11.5411 20.58 11.2097 20.58H9.31969V21.92C9.31969 22.2514 9.05106 22.52 8.71969 22.52H7.37969V23.88H15.8697C16.2011 23.88 16.4697 24.1486 16.4697 24.48C16.4697 24.8114 16.2011 25.08 15.8697 25.08H6.77969C6.44832 25.08 6.17969 24.8114 6.17969 24.48V21.92C6.17969 21.5886 6.44832 21.32 6.77969 21.32H8.11969V19.98Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.5297 19.96C21.8611 19.96 22.1297 20.2286 22.1297 20.56V24.06C22.1297 24.3913 21.8611 24.66 21.5297 24.66C21.1983 24.66 20.9297 24.3913 20.9297 24.06V20.56C20.9297 20.2286 21.1983 19.96 21.5297 19.96Z'
        fill='#232323'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.1904 22.31C19.1904 21.9786 19.4591 21.71 19.7904 21.71H23.2804C23.6118 21.71 23.8804 21.9786 23.8804 22.31C23.8804 22.6413 23.6118 22.91 23.2804 22.91H19.7904C19.4591 22.91 19.1904 22.6413 19.1904 22.31Z'
        fill='#232323'
      />
    </svg>
  )
}

export function ADCheckMarkOutline({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M21 1H1V21H21V1Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADEdit({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 22'
      fill='none'
    >
      <path
        d='M0.730469 21H19.2705'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.7709 1.85C17.5024 1.5812 17.1837 1.36795 16.8328 1.22246C16.4819 1.07696 16.1057 1.00208 15.7259 1.00208C15.346 1.00208 14.9698 1.07696 14.6189 1.22246C14.268 1.36795 13.9493 1.5812 13.6809 1.85L4.38086 11.14C3.44473 12.0641 2.75684 13.2095 2.38086 14.47L1.38086 18.25L5.15086 17.19C6.41705 16.8269 7.56546 16.1372 8.48086 15.19L17.7709 6C18.0488 5.73058 18.2697 5.40808 18.4206 5.05164C18.5715 4.69519 18.6493 4.31207 18.6493 3.925C18.6493 3.53793 18.5715 3.15481 18.4206 2.79836C18.2697 2.44192 18.0488 2.11942 17.7709 1.85V1.85Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.8604 2.67004C12.9066 3.73808 13.3612 4.74759 14.1304 5.49004C14.8872 6.26942 15.9148 6.72775 17.0004 6.77004'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADUpArrow({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M26 21L16 11L6 21'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADLeftArrow({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M21 26L11 16L21 6'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADRightArrow({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M11 26L21 16L11 6'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export function ADClip({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 23'
      fill='none'
    >
      <path
        d='M22.655 9.2H12.1373C8.13039 9.2 8.1304 14.8 12.1373 14.8H22.1542C28.6653 14.8 28.5651 5 22.1542 5H10.6346C3.12179 5 3.12182 19 10.6346 19H22.655'
        stroke='#25252E'
      />
    </svg>
  )
}
