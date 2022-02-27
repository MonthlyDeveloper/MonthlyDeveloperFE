import { CSSProp, css } from 'styled-components';

type MediaQueryProps = {
  mobile: number;
  tablet: number;
  desktop: number;
  grid3: number;
};

export const sizes: MediaQueryProps = {
  mobile: 580,
  tablet: 1024,
  desktop: 1284,
  grid3: 1400,
};

// // Iterate through the sizes and create a media template
type BackQuoteArgs = string[];

const media = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
  tablet: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.tablet}px) {
        ${css(literals, ...args)}
      }
    `,
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.desktop}px) {
        ${css(literals, ...args)}
      }
    `,
  grid3: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.grid3}px) {
        ${css(literals, ...args)}
      }
    `,
  // 세로모드
  portrait: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media (orientation: portrait) {
        ${css(literals, ...args)}
      }
    `,
  // 가로모드
  landscape: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media (orientation: landscape) {
        ${css(literals, ...args)}
      }
    `,
} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp>;

export default media;
