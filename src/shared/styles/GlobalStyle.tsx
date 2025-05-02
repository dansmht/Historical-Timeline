import { createGlobalStyle } from 'styled-components';
import { Breakpoints } from '../constants/breakpoints';

export const GlobalStyle = createGlobalStyle`
  // Reset CSS
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  // ------------------------------------------- \\

  :root {
    --color-main: #42567A;
    --color-main-10: #42567A10;
    --color-main-20: #42567A20;
    --color-main-80: #42567A80;
    --color-blue: #3877EE;
    --color-blue-10: #3877EE10;
    --color-blue-20: #3877EE20;
    --color-pink: #EF5DA8;
    --color-white: #FFFFFF;
  }

  body {
    font-family: "PT Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  #root {
    @media (min-width: ${Breakpoints.sm}px) {
      padding-inline: 15px;
    }
    @media (min-width: ${Breakpoints.md}px) {
      padding-inline: 30px;
    }
    @media (min-width: ${Breakpoints.lg}px) {
      padding-inline: 45px;
    }
    @media (min-width: ${Breakpoints.xl}px) {
      padding-inline: 60px;
    }
  }
`;
