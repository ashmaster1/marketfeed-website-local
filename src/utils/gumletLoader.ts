export const gumletLoaderBasic = ({
  src,
  width,
  quality,
}: {
  src: String;
  width: Number;
  quality: any;
}) => {
  return `https://fundfolio.gumlet.io/fundfolio${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const gumletLoaderSubBroking = ({
  src,
  width,
  quality,
}: {
  src: String;
  width: Number;
  quality: any;
}) => {
  return `https://fundfolio.gumlet.io/fundfolio/subBroking${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const gumletLoaderMarketfeed = ({
  src,
  width,
  quality,
}: {
  src: String;
  width: Number;
  quality: any;
}) => {
  return `https://fundfolio.gumlet.io/fundfolio/marketfeed${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const gumletLoaderMarketfeedUniversity = ({
  src,
  width,
  quality,
}: {
  src: String;
  width: Number;
  quality: any;
}) => {
  return `https://fundfolio.gumlet.io/fundfolio/Breakout-Universiy${src}?w=${width}&q=${
    quality || 75
  }`;
};
