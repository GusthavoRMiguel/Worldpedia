import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    background: {
      colors: {
        primary: string;
        secondary: string;
      };
    };
    font: {
      family: string;
    };
    colors: {
      scrollbar_thumb: string;
      scrollbar_track: string;
      menu: string;
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      text_hover: string;
      text_secondary: string;
      text_secondary_hover: string;
    };
  }
}
