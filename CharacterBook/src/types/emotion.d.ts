import "@emotion/react";
import { themeDarkHeart } from '../styles/theme'

declare module "@emotion/react" {
  export interface Theme extends  themeDarkHeart {
    colors: {
      background: string;
      surface: string;
      primary: string;
      primaryBlack: string;
      secondary: string;
      text: string;
      textSecondary: string;
      textGeneral:string;
      border: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
      round: string;
    };

    lists: {
      noStyle: string;
    };

    decorations: {
      fromDark: string;
    };
  }
}