import { css } from "@emotion/react";

export const globalStyles = css`
  *,
  html,
  body {
    font-family: "GangwonEdu", sans-serif !important;
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
    font-family: "GangwonEdu";
    src: url("/fonts/GangwonEdu_OTFLightA.eot");
    src: url("/fonts/GangwonEdu_OTFLightA.eot?#iefix")
        format("embedded-opentype"),
      url("/fonts/GangwonEdu_OTFLightA.woff2") format("woff2"),
      url("/fonts/GangwonEdu_OTFLightA.woff") format("woff"),
      url("/fonts/GangwonEdu_OTFLightA.ttf") format("truetype"),
      url("/fonts/GangwonEdu_OTFLightA.svg#GangwonEdu OTFLightA") format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "GangwonEdu";
    src: url("/fonts/GangwonEdu_OTFBoldA.eot");
    src: url("/fonts/GangwonEdu_OTFBoldA.eot?#iefix")
        format("embedded-opentype"),
      url("/fonts/GangwonEdu_OTFBoldA.woff2") format("woff2"),
      url("/fonts/GangwonEdu_OTFBoldA.woff") format("woff"),
      url("/fonts/GangwonEdu_OTFBoldA.ttf") format("truetype"),
      url("/fonts/GangwonEdu_OTFBoldA.svg#GangwonEdu OTFBoldA") format("svg");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "GangwonEdu";
    src: url("/fonts/GangwonEduPowerExtraBoldA.eot");
    src: url("/fonts/GangwonEduPowerExtraBoldA.eot?#iefix")
        format("embedded-opentype"),
      url("/fonts/GangwonEduPowerExtraBoldA.woff2") format("woff2"),
      url("/fonts/GangwonEduPowerExtraBoldA.woff") format("woff"),
      url("/fonts/GangwonEduPowerExtraBoldA.ttf") format("truetype"),
      url("/fonts/GangwonEduPowerExtraBoldA.svg#GangwonEduPowerExtraBoldA")
        format("svg");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
`;
