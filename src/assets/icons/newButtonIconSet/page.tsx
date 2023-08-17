import { getColor } from '@/helpers/getColor';
import { v4 as uuidv4 } from 'uuid';

interface ADIconProps {
  height: number | string;
  width: number | string;
  variant: string;
  disabled: boolean;
  hoverState: boolean;
  activeState: boolean;
}

export const SVGReturner = (
  svgName: string,
  height: number | string,
  width: number | string,
  variant: string,
  disabled: boolean,
  hoverState: boolean,
  activeState: boolean
) => {
  const svgs = new Map([
    [
      'ADArrowDown',
      <ADArrowDown
        key={uuidv4()}
        height={height}
        width={width}
        variant={variant}
        disabled={disabled}
        hoverState={hoverState}
        activeState={activeState}
      />,
    ],
    [
      'ADRefresh',
      <ADRefresh
        key={uuidv4()}
        height={height}
        width={width}
        variant={variant}
        disabled={disabled}
        hoverState={hoverState}
        activeState={activeState}
      />,
    ],
  ]);

  return svgs.get(svgName);
};

const ADArrowDown: React.FC<ADIconProps> = ({
  height,
  width,
  variant,
  disabled,
  hoverState,
  activeState,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none">
      <path
        d="M26 11L16 21L6 11"
        stroke={getColor(variant, disabled, hoverState, activeState)}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ADRefresh: React.FC<ADIconProps> = ({
  height,
  width,
  variant,
  disabled,
  hoverState,
  activeState,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none">
      <path
        d="M2.91965 4.15003C3.11965 3.91003 3.32965 3.67003 3.55965 3.44003C5.05011 1.95037 7.0109 1.02349 9.10805 0.817248C11.2052 0.61101 13.309 1.13817 15.0611 2.30895C16.8132 3.47972 18.1052 5.2217 18.7171 7.23816C19.329 9.25462 19.2229 11.4209 18.417 13.3679C17.611 15.3149 16.1549 16.9223 14.2968 17.9163C12.4387 18.9103 10.2935 19.2294 8.22656 18.8193C6.1596 18.4092 4.29874 17.2951 2.96094 15.667C1.62315 14.0389 0.891155 11.9973 0.889648 9.89003"
        stroke={getColor(variant, disabled, hoverState, activeState)}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
