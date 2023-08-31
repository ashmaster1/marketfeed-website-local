const basePixel = 16;
const small = 360 / 320;
const mobile = 768 / 640;
const medium = 1280 / 1440;
const tablet = 1080 / 1440;
const large = 1920 / 1440;
const extraLarge = 2560 / 1440;
const xxl = 3840 / 1440;
export const rem = (pixel, device) => {
  if (device === "small") {
    return (pixel / basePixel) * small + "rem";
  } else if (device === "medium") {
    return (pixel / basePixel) * medium + "rem";
  } else if (device === "mobile") {
    return (pixel / basePixel) * mobile + "rem";
  } else if (device === "tablet") {
    return (pixel / basePixel) * tablet + "rem";
  } else if (device === "large") {
    return (pixel / basePixel) * large + "rem";
  } else if (device === "extraLarge") {
    return (pixel / basePixel) * extraLarge + "rem";
  } else if (device === "xxl") {
    return (pixel / basePixel) * xxl + "rem";
  }
  return pixel / basePixel + "rem";
};

export const imgRemConverter = (pixel) => {
  const windowSize = window.innerWidth;
  if (windowSize >= 600) {
    return (window.innerWidth / 1440) * pixel;
  }
  return pixel;
};
