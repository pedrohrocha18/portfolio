import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    color: #e5e7ef;
    background: #0b0a12;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    background:
      linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      radial-gradient(circle at top left, rgba(155, 92, 255, 0.26), transparent 32rem),
      radial-gradient(circle at 82% 12%, rgba(53, 208, 186, 0.12), transparent 26rem),
      linear-gradient(180deg, #0b0a12 0%, #100d1b 44%, #151122 100%);
    background-size: 42px 42px, 42px 42px, auto, auto, auto;
  }

  body,
  button,
  input,
  textarea {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
  }

  img,
  svg {
    display: block;
  }

  ::selection {
    color: #ffffff;
    background: #9b5cff;
  }

  :focus-visible {
    outline: 3px solid rgba(155, 92, 255, 0.5);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`
