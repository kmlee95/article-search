import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    MAIN_COLOR: string;
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
