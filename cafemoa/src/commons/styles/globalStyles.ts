import { css } from "@emotion/react";
import { DEFAULT_COLOR } from "../default/default";

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
    :hover {
      color: #000000;
    }
  }

  input {
    border: 0 none;
  }

  .slick-arrow {
    width: auto;
    height: auto;
  }
  .slick-next {
    right: -80px;
  }
  .slick-prev {
    left: -80px;
  }

  .slick-arrow::before {
    color: ${DEFAULT_COLOR.mainColor};
    font-size: 70px;
  }

  .slick-dots li button:before {
    content: "";
    left: 50%;
    top: 50%;
    margin-left: -5px;
    margin-top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${DEFAULT_COLOR.mainColor};
    transition: all 0.4s;
  }
  .slick-dots li.slick-active button:before {
    margin-left: -10px;
    width: 20px;
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
