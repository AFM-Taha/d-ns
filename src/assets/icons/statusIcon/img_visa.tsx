import React from 'react'
import { ADIconProps } from '@/types/Icons/icons'

export function ADImageGray({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 92 92"
      fill="none">
      <g clip-path="url(#clip0_9420_249803)">
        <rect
          width="92"
          height="92"
          fill="black"
          fill-opacity="0.1"
          style={{mixBlendMode:"multiply"}}
        />
        <path
          d="M37.2499 38.889C37.2499 40.8525 35.683 42.4443 33.7501 42.4443C31.8169 42.4443 30.25 40.8525 30.25 38.889C30.25 36.9251 31.8169 35.3333 33.7501 35.3333C35.683 35.3333 37.2499 36.9251 37.2499 38.889Z"
          fill="#CBCBCB"
        />
        <path
          d="M61.75 30H30.25C27.3555 30 25 32.3929 25 35.3333V56.6667C25 56.7663 25.0244 56.8604 25.0298 56.96C25.0051 57.1732 25.0157 57.3883 25.0926 57.5911C25.5249 60.0908 27.667 62 30.25 62H61.75C64.6445 62 67 59.6071 67 56.6667V35.3333C67 32.3929 64.6445 30 61.75 30ZM30.25 33.5557H61.75C62.7142 33.5557 63.4999 34.3538 63.4999 35.3333V49.4473L54.2951 40.096C53.0979 38.8799 51.1503 38.8799 49.9551 40.096L41.6251 48.5583L39.4199 46.3184C38.2231 45.1022 36.2751 45.1022 35.0799 46.3184L28.5001 53.0026V35.3333C28.5001 34.3538 29.2858 33.5557 30.25 33.5557Z"
          fill="#CBCBCB"
        />
      </g>
      <defs>
        <clipPath id="clip0_9420_249803">
          <rect width="92" height="92" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ADEmailCircle({ height, width, color }: ADIconProps) {
  return (
    <div className="rounded-full border border-blue_2 p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 37 24"
        fill="none">
        <path
          d="M35 1.81909H2C1.44772 1.81909 1 2.26681 1 2.81909V21.8191C1 22.3714 1.44772 22.8191 2 22.8191H35C35.5523 22.8191 36 22.3714 36 21.8191V2.81909C36 2.26681 35.5523 1.81909 35 1.81909Z"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 1.88379H2L17.944 16.8191L35 1.88379Z"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 11.8191L2 22.8191H35L24 11.8191"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export function ADDocCircle({ height, width, color }: ADIconProps) {
  return (
    <div className="rounded-full border border-blue_2 p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 26 36"
        fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 8.00784V33.9191H24V2.81909H7.12469L9.1 0.819092H25C25.5523 0.819092 26 1.26681 26 1.81909V34.9191C26 35.4714 25.5523 35.9191 25 35.9191H1C0.447716 35.9191 0 35.4714 0 34.9191V10.0328L2 8.00784Z"
          fill="#0072BC"
        />
        <path
          d="M9.1001 3.23328L9.1001 8.91907C9.1001 9.47135 8.65238 9.91907 8.1001 9.91907L2.41431 9.91907C1.52341 9.91907 1.07724 8.84193 1.7072 8.21196L7.39299 2.52617C8.02295 1.89621 9.1001 2.34237 9.1001 3.23328Z"
          fill="#0072BC"
        />
        <path
          d="M6.5 16.4191H18.2"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M6.5 21.6191H13"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M6.5 26.8191H18.2"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

export function ADPrinterCircle({ height, width, color }: ADIconProps) {
  return (
    <div className="border-blue_2 rounded-full p-2 border">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 33"
        fill="none">
        <path
          d="M7 12.3191V1.81909H25V12.3191"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 25.8184H4C3.20435 25.8184 2.44129 25.5023 1.87868 24.9397C1.31607 24.3771 1 23.614 1 22.8184V15.3184C1 14.5227 1.31607 13.7596 1.87868 13.197C2.44129 12.6344 3.20435 12.3184 4 12.3184H28C28.7956 12.3184 29.5587 12.6344 30.1213 13.197C30.6839 13.7596 31 14.5227 31 15.3184V22.8184C31 23.614 30.6839 24.3771 30.1213 24.9397C29.5587 25.5023 28.7956 25.8184 28 25.8184H25"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 19.8184H7V31.8184H25V19.8184Z"
          stroke="#0072BC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export function ADCheckCircle({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 72 73"
      fill="none">
      <path
        d="M53 25.8191L32.375 46.8191L23 37.2736"
        stroke="#0072BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="1"
        y="1.81909"
        width="70"
        height="70"
        rx="35"
        stroke="#0072BC"
        stroke-width="2"
      />
    </svg>
  );
}

export function ADBarCode({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 72 73"
      fill="none">
      <path
        d="M19.2656 51.1048H18V22.8191H19.2656V51.1048ZM20.5312 51.0847H19.8884V22.8191H20.5312V51.0847ZM22.4196 51.0847H21.7969V22.8191H22.4196V51.0847ZM25.5737 51.0847H24.9509V22.8191H25.5737V51.0847ZM28.7277 51.0847H27.4821V22.8191H28.7277V51.0847ZM31.2589 51.0847H30.6362V22.8191H31.2589V51.0847ZM32.5246 51.0847H31.9018V22.8191H32.5246V51.0847ZM33.7902 51.0847H33.1674V22.8191H33.7902V51.0847ZM36.9442 51.0847H35.6786V22.8191H36.9442V51.0847ZM40.0982 51.0847H38.8326V22.8191H40.0982V51.0847ZM42.6295 51.0847H41.3638V22.8191H42.6295V51.0847ZM45.1607 51.0847H43.8951V22.8191H45.1607V51.0847ZM47.0491 51.0847H45.7835V22.8191H47.0491V51.0847ZM50.846 51.0847H48.9576V22.8191H50.846V51.0847ZM52.1116 51.0847H51.4688V22.8191H52.1116V51.0847ZM54 51.1048H52.7344V22.8191H54V51.1048Z"
        fill="#0072BC"
      />
      <rect
        x="1"
        y="1.81909"
        width="70"
        height="70"
        rx="35"
        stroke="#0072BC"
        stroke-width="2"
      />
    </svg>
  );
}

export function ADVisaSmall({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 8"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.95025 7.75825H3.89051L2.34596 1.69237C2.27264 1.41334 2.11698 1.16667 1.88801 1.0504C1.31659 0.75823 0.686915 0.525705 0 0.408431V0.174895H3.31808C3.77602 0.174895 4.11948 0.525705 4.17672 0.933129L4.97813 5.30865L7.03686 0.174895H9.03936L5.95025 7.75825ZM10.1842 7.75825H8.23897L9.84077 0.174895H11.786L10.1842 7.75825ZM14.3027 2.27571C14.3599 1.86728 14.7034 1.63374 15.1041 1.63374C15.7338 1.57511 16.4197 1.69238 16.9921 1.98354L17.3356 0.35081C16.7631 0.117274 16.1335 0 15.562 0C13.674 0 12.3002 1.05041 12.3002 2.50824C12.3002 3.61728 13.2733 4.19961 13.9602 4.55042C14.7034 4.90021 14.9896 5.13375 14.9324 5.48355C14.9324 6.00825 14.3599 6.24178 13.7885 6.24178C13.1016 6.24178 12.4147 6.06688 11.786 5.77471L11.4426 7.40845C12.1295 7.69962 12.8726 7.81689 13.5595 7.81689C15.6765 7.87451 16.9921 6.82512 16.9921 5.25001C16.9921 3.26647 14.3027 3.15021 14.3027 2.27571ZM23.8 7.75825L22.2554 0.174895H20.5964C20.2529 0.174895 19.9095 0.408431 19.795 0.75823L16.9349 7.75825H18.9374L19.3371 6.65021H21.7975L22.0265 7.75825H23.8ZM20.8826 2.21708L21.454 5.07512H19.8523L20.8826 2.21708Z"
        fill="#172B85"
      />
    </svg>
  );
}

