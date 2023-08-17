const primaryColors = ["#fff", "#B2B2C2"];
const secondaryColors = ["#0B80CC", "#E4E4EE", "#0072BC", "#0F6399"];
const arrowColors = ["#25252E", "#B2B2C2"];

export const getColor = (
  variant: string,
  disabled: boolean,
  hoverState: boolean,
  activeState: boolean
) => {
  if (variant === "primary") {
    if (disabled) {
      return primaryColors[1];
    } else {
      return primaryColors[0];
    }
  } else if (variant === "secondary") {
    if (disabled) {
      return secondaryColors[1];
    } else {
      if (activeState) {
        return secondaryColors[3];
      } else if (hoverState) {
        return secondaryColors[2];
      } else {
        return secondaryColors[0];
      }
    }
  } else if (variant === "arrow") {
    if (disabled) {
      return arrowColors[1];
    } else {
      return arrowColors[0];
    }
  }
};
