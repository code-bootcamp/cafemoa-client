import { css } from "@emotion/react";
import { DEFAULT_COLOR } from "../default/default";

export const globalStyles = css`
  html,
  body {
    font-family: "NotoSansKR", sans-serif !important;
    line-height: 1.25;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  #__next {
    width: 100%;
    min-width: 320px;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0 none;
    background-color: transparent;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
    :disabled {
      background-color: #8b8b8b !important;
      color: #ffffff !important;
      > * {
        color: #ffffff !important;
      }
    }
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
    font-family: "NotoSansKR";
    src: url("/fonts/NotoSansKR-Regular-Alphabetic.woff2") format("woff2"),
      url("/fonts/NotoSansKR-Regular-Alphabetic.woff") format("woff"),
      url("/fonts/NotoSansKR-Regular-Alphabetic.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("/fonts/NotoSansKR-Medium-Alphabetic.woff2") format("woff2"),
      url("/fonts/NotoSansKR-Medium-Alphabetic.woff") format("woff"),
      url("/fonts/NotoSansKR-Medium-Alphabetic.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("/fonts/NotoSansKR-Bold-Alphabetic.woff2") format("woff2"),
      url("/fonts/NotoSansKR-Bold-Alphabetic.woff") format("woff"),
      url("/fonts/NotoSansKR-Bold-Alphabetic.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
