import React from 'react'
import { ADIconProps } from '@/types/Icons/icons'

export function ADEnter({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M16.6699 7L20.6699 11L16.6699 15'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.33984 11H20.6698'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.0001 21H1.33008V1H12.0001'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADFilledTag({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M20.63 10.8L11.2 1.36998C11.0701 1.2395 10.9134 1.13884 10.7407 1.07495C10.5681 1.01106 10.3836 0.985478 10.2 0.999977L2.53004 1.36998C2.21648 1.38458 1.91967 1.5157 1.69772 1.73766C1.47576 1.95961 1.34464 2.25642 1.33004 2.56998L1.00004 10.24C0.985539 10.4235 1.01112 10.608 1.07501 10.7807C1.1389 10.9534 1.23957 11.1101 1.37004 11.24L10.8 20.67C11.038 20.9063 11.3597 21.0389 11.695 21.0389C12.0304 21.0389 12.3521 20.9063 12.59 20.67L20.59 12.67C20.722 12.5538 20.8285 12.4115 20.9026 12.2521C20.9767 12.0926 21.017 11.9195 21.0207 11.7438C21.0245 11.568 20.9917 11.3933 20.9244 11.2309C20.8572 11.0684 20.7569 10.9217 20.63 10.8ZM4.00004 3.99998C4.27927 3.71908 4.63561 3.52742 5.0239 3.44928C5.41218 3.37115 5.81492 3.41006 6.18107 3.56108C6.54722 3.71211 6.86028 3.96844 7.08056 4.2976C7.30085 4.62676 7.41845 5.01391 7.41845 5.40998C7.41845 5.80605 7.30085 6.1932 7.08056 6.52235C6.86028 6.85151 6.54722 7.10785 6.18107 7.25887C5.81492 7.4099 5.41218 7.44881 5.0239 7.37067C4.63561 7.29254 4.27927 7.10087 4.00004 6.81998C3.62754 6.44525 3.41845 5.93835 3.41845 5.40998C3.41845 4.88161 3.62754 4.3747 4.00004 3.99998Z'
        fill='#232323'
      />
      <path
        d='M20.2702 11.17L10.8302 1.73001C10.6897 1.58932 10.4991 1.51018 10.3002 1.51001L2.62022 1.88001C2.43578 1.89179 2.26196 1.97038 2.13127 2.10106C2.00059 2.23175 1.922 2.40557 1.91022 2.59001L1.54022 10.27C1.53433 10.3737 1.55095 10.4774 1.58892 10.5741C1.6269 10.6708 1.68533 10.7581 1.76022 10.83L11.2002 20.27C11.3408 20.4105 11.5315 20.4893 11.7302 20.4893C11.929 20.4893 12.1196 20.4105 12.2602 20.27L20.2602 12.27C20.3991 12.1283 20.4779 11.9384 20.4802 11.74C20.4869 11.6356 20.4717 11.531 20.4355 11.4328C20.3993 11.3346 20.343 11.2451 20.2702 11.17ZM6.86022 6.85001C6.58099 7.13091 6.22465 7.32257 5.83636 7.4007C5.44808 7.47884 5.04533 7.43993 4.67919 7.28891C4.31304 7.13788 3.99998 6.88154 3.77969 6.55239C3.5594 6.22323 3.44181 5.83608 3.44181 5.44001C3.44181 5.04394 3.5594 4.65679 3.77969 4.32763C3.99998 3.99848 4.31304 3.74214 4.67919 3.59111C5.04533 3.44009 5.44808 3.40118 5.83636 3.47931C6.22465 3.55745 6.58099 3.74911 6.86022 4.03001C7.23272 4.40473 7.44181 4.91164 7.44181 5.44001C7.44181 5.96838 7.23272 6.47529 6.86022 6.85001Z'
        fill='#232323'
      />
      <path
        d='M20.9998 10.44L11.5598 0.999999C11.386 0.823396 11.1767 0.685718 10.9457 0.596075C10.7147 0.506431 10.4673 0.466866 10.2198 0.479999L2.53983 0.839999C2.09701 0.861992 1.67834 1.04845 1.36577 1.36288C1.05319 1.6773 0.869206 2.09706 0.849826 2.54L0.489826 10.22C0.474107 10.4668 0.511496 10.7142 0.599474 10.9453C0.687451 11.1765 0.82397 11.3861 0.999826 11.56L10.4398 21C10.6047 21.1661 10.8011 21.2976 11.0174 21.3869C11.2338 21.4762 11.4658 21.5215 11.6998 21.52C11.9407 21.5281 12.1807 21.486 12.4044 21.3965C12.6282 21.307 12.831 21.172 12.9998 21L20.9998 13C21.1652 12.8355 21.2965 12.64 21.386 12.4246C21.4756 12.2092 21.5217 11.9783 21.5217 11.745C21.5217 11.5117 21.4756 11.2808 21.386 11.0654C21.2965 10.85 21.1652 10.6545 20.9998 10.49V10.44ZM6.85983 6.85C6.5806 7.13089 6.22425 7.32256 5.83597 7.40069C5.44768 7.47883 5.04494 7.43992 4.67879 7.28889C4.31265 7.13787 3.99959 6.88153 3.7793 6.55238C3.55901 6.22322 3.44141 5.83607 3.44141 5.44C3.44141 5.04393 3.55901 4.65678 3.7793 4.32762C3.99959 3.99847 4.31265 3.74213 4.67879 3.5911C5.04494 3.44008 5.44768 3.40117 5.83597 3.4793C6.22425 3.55744 6.5806 3.7491 6.85983 4.03C7.23233 4.40472 7.44141 4.91163 7.44141 5.44C7.44141 5.96837 7.23233 6.47527 6.85983 6.85Z'
        fill='#232323'
      />
    </svg>
  )
}

export function ADBid({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 23'
      fill='none'
    >
      <path
        d='M6 5.57001L21 20.57'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.13969 14.86L2.42969 9.14001'
        stroke={color || '#232323'}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.2903 7.71L9.57031 2'
        stroke={color || '#232323'}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 22H13.86'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADLocation({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 18 22'
      fill='none'
    >
      <path
        d='M9.00055 12.8C11.0385 12.8 12.6905 11.1479 12.6905 9.10998C12.6905 7.07205 11.0385 5.41998 9.00055 5.41998C6.96262 5.41998 5.31055 7.07205 5.31055 9.10998C5.31055 11.1479 6.96262 12.8 9.00055 12.8Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.1102 9.11C17.1102 12.57 12.2802 18.16 10.1102 20.53C9.97255 20.6791 9.80553 20.798 9.61966 20.8794C9.43379 20.9608 9.23309 21.0028 9.0302 21.0028C8.8273 21.0028 8.6266 20.9608 8.44073 20.8794C8.25486 20.798 8.08784 20.6791 7.9502 20.53C5.7502 18.16 0.950195 12.53 0.950195 9.11C0.950195 6.95909 1.80464 4.89628 3.32556 3.37536C4.84648 1.85444 6.90929 1 9.06019 1C11.2111 1 13.2739 1.85444 14.7948 3.37536C16.3158 4.89628 17.1702 6.95909 17.1702 9.11H17.1102Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADFilledLocation({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 18 22'
      fill='none'
    >
      <path
        d='M8.99965 1C6.84874 1 4.78593 1.85444 3.26501 3.37536C1.74409 4.89628 0.889648 6.95909 0.889648 9.11C0.889648 12.57 5.71965 18.16 7.88965 20.53C8.02729 20.6791 8.19431 20.798 8.38018 20.8794C8.56605 20.9608 8.76675 21.0028 8.96965 21.0028C9.17255 21.0028 9.37325 20.9608 9.55912 20.8794C9.74499 20.798 9.912 20.6791 10.0496 20.53C12.2496 18.16 17.0496 12.53 17.0496 9.11C17.0497 6.96945 16.2035 4.91568 14.6955 3.39647C13.1876 1.87727 11.1401 1.01584 8.99965 1ZM8.99965 12.8C8.26984 12.8 7.55641 12.5836 6.94959 12.1781C6.34278 11.7727 5.86982 11.1964 5.59053 10.5221C5.31125 9.84784 5.23817 9.10591 5.38055 8.39012C5.52293 7.67433 5.87437 7.01683 6.39042 6.50078C6.90648 5.98472 7.56398 5.63328 8.27977 5.4909C8.99556 5.34852 9.73749 5.4216 10.4118 5.70088C11.086 5.98017 11.6623 6.45313 12.0678 7.05995C12.4732 7.66676 12.6896 8.38019 12.6896 9.11C12.6896 10.0886 12.3009 11.0272 11.6089 11.7192C10.9169 12.4112 9.9783 12.8 8.99965 12.8Z'
        fill='#232323'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADTag({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M20.63 12.59L12.63 20.59C12.3921 20.8263 12.0704 20.9589 11.735 20.9589C11.3997 20.9589 11.078 20.8263 10.84 20.59L1.37004 11.2C1.23957 11.0701 1.1389 10.9134 1.07501 10.7407C1.01112 10.568 0.985539 10.3835 1.00004 10.2L1.37004 2.52998C1.38464 2.21642 1.51576 1.91961 1.73772 1.69766C1.95967 1.4757 2.25648 1.34458 2.57004 1.32998L10.24 0.999977C10.4236 0.985478 10.6081 1.01106 10.7807 1.07495C10.9534 1.13884 11.1101 1.2395 11.24 1.36998L20.67 10.8C20.9011 11.0431 21.0266 11.3679 21.0191 11.7032C21.0116 12.0386 20.8718 12.3574 20.63 12.59V12.59Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.43969 6.69999C6.13557 6.69999 6.69969 6.13587 6.69969 5.43999C6.69969 4.74411 6.13557 4.17999 5.43969 4.17999C4.74381 4.17999 4.17969 4.74411 4.17969 5.43999C4.17969 6.13587 4.74381 6.69999 5.43969 6.69999Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADFilledTagBC({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
    >
      <path
        d='M20.63 10.8L11.2 1.36998C11.0701 1.2395 10.9134 1.13884 10.7407 1.07495C10.5681 1.01106 10.3836 0.985478 10.2 0.999977L2.53004 1.36998C2.21648 1.38458 1.91967 1.5157 1.69772 1.73766C1.47576 1.95961 1.34464 2.25642 1.33004 2.56998L1.00004 10.24C0.985539 10.4235 1.01112 10.608 1.07501 10.7807C1.1389 10.9534 1.23957 11.1101 1.37004 11.24L10.8 20.67C11.038 20.9063 11.3597 21.0389 11.695 21.0389C12.0304 21.0389 12.3521 20.9063 12.59 20.67L20.59 12.67C20.722 12.5538 20.8285 12.4115 20.9026 12.2521C20.9767 12.0926 21.017 11.9195 21.0207 11.7438C21.0245 11.568 20.9917 11.3933 20.9244 11.2309C20.8572 11.0684 20.7569 10.9217 20.63 10.8ZM3.63004 3.66998C3.98052 3.31758 4.42773 3.07717 4.915 2.97921C5.40226 2.88125 5.90764 2.93016 6.36708 3.11973C6.82652 3.30931 7.21933 3.63101 7.49574 4.04408C7.77215 4.45714 7.9197 4.94296 7.9197 5.43998C7.9197 5.93699 7.77215 6.42281 7.49574 6.83588C7.21933 7.24894 6.82652 7.57065 6.36708 7.76022C5.90764 7.94979 5.40226 7.9987 4.915 7.90074C4.42773 7.80279 3.98052 7.56237 3.63004 7.20998C3.17238 6.73193 2.92026 6.09358 2.92773 5.43181C2.93521 4.77005 3.20169 4.13757 3.67004 3.66998H3.63004Z'
        fill='#232323'
      />
      <path
        d='M20.2702 11.17L10.8302 1.73001C10.6897 1.58932 10.4991 1.51018 10.3002 1.51001L2.62022 1.88001C2.43578 1.89179 2.26196 1.97038 2.13127 2.10106C2.00059 2.23175 1.922 2.40557 1.91022 2.59001L1.54022 10.27C1.53433 10.3737 1.55095 10.4774 1.58892 10.5741C1.6269 10.6708 1.68533 10.7581 1.76022 10.83L11.2002 20.27C11.3408 20.4105 11.5315 20.4893 11.7302 20.4893C11.929 20.4893 12.1196 20.4105 12.2602 20.27L20.2602 12.27C20.3991 12.1283 20.4779 11.9384 20.4802 11.74C20.4869 11.6356 20.4717 11.531 20.4355 11.4328C20.3993 11.3346 20.343 11.2451 20.2702 11.17ZM7.27022 7.17001C6.91974 7.52241 6.47252 7.76282 5.98526 7.86078C5.49799 7.95873 4.99262 7.90983 4.53318 7.72025C4.07374 7.53068 3.68092 7.20897 3.40452 6.79591C3.12811 6.38285 2.98056 5.89702 2.98056 5.40001C2.98056 4.903 3.12811 4.41717 3.40452 4.00411C3.68092 3.59105 4.07374 3.26934 4.53318 3.07977C4.99262 2.89019 5.49799 2.84129 5.98526 2.93924C6.47252 3.0372 6.91974 3.27761 7.27022 3.63001C7.50221 3.86825 7.68495 4.14988 7.80801 4.45881C7.93106 4.76773 7.99201 5.09788 7.98736 5.43038C7.98272 5.76287 7.91258 6.09119 7.78094 6.39656C7.64931 6.70192 7.45877 6.97834 7.22022 7.21001L7.27022 7.17001Z'
        fill='#232323'
      />
      <path
        d='M20.9998 10.44L11.5598 0.999999C11.386 0.823396 11.1767 0.685718 10.9457 0.596075C10.7147 0.506431 10.4673 0.466866 10.2198 0.479999L2.53983 0.839999C2.09701 0.861992 1.67834 1.04845 1.36577 1.36288C1.05319 1.6773 0.869206 2.09706 0.849826 2.54L0.489826 10.22C0.474107 10.4668 0.511496 10.7142 0.599474 10.9453C0.687451 11.1765 0.82397 11.3861 0.999826 11.56L10.4398 21C10.6047 21.1661 10.8011 21.2976 11.0174 21.3869C11.2338 21.4762 11.4658 21.5215 11.6998 21.52C11.9407 21.5281 12.1807 21.486 12.4044 21.3965C12.6282 21.307 12.831 21.172 12.9998 21L20.9998 13C21.1652 12.8355 21.2965 12.64 21.386 12.4246C21.4756 12.2092 21.5217 11.9783 21.5217 11.745C21.5217 11.5117 21.4756 11.2808 21.386 11.0654C21.2965 10.85 21.1652 10.6545 20.9998 10.49V10.44ZM7.21983 7.21C6.86934 7.5624 6.42213 7.80281 5.93486 7.90076C5.4476 7.99872 4.94222 7.94981 4.48278 7.76024C4.02335 7.57067 3.63053 7.24896 3.35412 6.8359C3.07772 6.42284 2.93016 5.93701 2.93016 5.44C2.93016 4.94299 3.07772 4.45716 3.35412 4.0441C3.63053 3.63103 4.02335 3.30933 4.48278 3.11976C4.94222 2.93018 5.4476 2.88127 5.93486 2.97923C6.42213 3.07719 6.86934 3.3176 7.21983 3.67C7.68279 4.14284 7.94206 4.77825 7.94206 5.44C7.94206 6.10175 7.68279 6.73716 7.21983 7.21Z'
        fill='#232323'
      />
    </svg>
  )
}

export function ADFilter({ height, width, color }: ADIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 22'
      fill='none'
    >
      <path
        d='M19.29 3.85999H9.29004'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.56996 3.85999H0.709961'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.43031 6.72C8.00985 6.72 9.29031 5.43953 9.29031 3.86C9.29031 2.28047 8.00985 1 6.43031 1C4.85078 1 3.57031 2.28047 3.57031 3.86C3.57031 5.43953 4.85078 6.72 6.43031 6.72Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.29 18.14H9.29004'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.56996 18.14H0.709961'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.43031 21C8.00985 21 9.29031 19.7196 9.29031 18.14C9.29031 16.5605 8.00985 15.28 6.43031 15.28C4.85078 15.28 3.57031 16.5605 3.57031 18.14C3.57031 19.7196 4.85078 21 6.43031 21Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M0.709961 11H10.71'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.4297 11H19.2897'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.57 13.86C15.1495 13.86 16.43 12.5795 16.43 11C16.43 9.42048 15.1495 8.14001 13.57 8.14001C11.9904 8.14001 10.71 9.42048 10.71 11C10.71 12.5795 11.9904 13.86 13.57 13.86Z'
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ADThreeFilledCategory({ height, width, color }: ADIconProps) {
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
        stroke={color || '#232323'}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}