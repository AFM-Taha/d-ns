export const getGap = (variant: string) => {
  if (variant === "primary" || variant === "secondary") {
    return "gap-12";
  }

  if (variant === "arrow") {
    return "items-center justify-between";
  }
};
