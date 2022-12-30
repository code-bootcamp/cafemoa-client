import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body {
    font-family: "GmarketSans", sans-serif !important;
    line-height: 1.25;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0 none;
    background-color: transparent;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: top;
    max-width: 100%;
  }

  a {
    font-size: 16px;
    text-decoration: none;
    color: #000000;
    cursor: pointer;
  }

  input {
    border: 0 none;
  }

  @font-face {
    font-family: "GmarketSans";
    src: url("/fonts/GmarketSansLight.woff2") format("woff2"),
      url("/fonts/GmarketSansLight.woff") format("woff"),
      url("/fonts/GmarketSansLight.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "GmarketSans";
    src: url("/fonts/GmarketSansMedium.woff2") format("woff2"),
      url("/fonts/GmarketSansMedium.woff") format("woff"),
      url("/fonts/GmarketSansMedium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "GmarketSans";
    src: url("/fonts/GmarketSansBold.woff2") format("woff2"),
      url("/fonts/GmarketSansBold.woff") format("woff"),
      url("/fonts/GmarketSansBold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
