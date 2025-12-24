export const getHoverTips = (count = 5) => {
  const integerArray = Array.from({ length: count }, (_, i) => (i + 1).toString());
  const hoverArray = Array.from({ length: count }, (_, i) => (i + 0.5).toString());
  return {
    integerArray,
    hoverArray,
  };
};
