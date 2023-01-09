interface IDefaultColorTypes {
  mainColor?: string; // deepBrown
  subColor01?: string; // brown
  subColor02?: string; // beige
  subColor03?: string; // lightBeige
  subColor04?: string; // deepBeige
  green?: string;
  black?: string;
  white?: string;
  gray?: string;
  lightGray?: string;
  [key: string]: any;
}

export const DEFAULT_COLOR: IDefaultColorTypes = {
  mainColor: "#81564B", // deepBrown
  subColor01: "#69473E", // brown
  subColor02: "#F5E9DF", // beige
  subColor03: "#F6F5F1", // lightBeige
  subColor04: "#F3E6D8", // deepBeige
  green: "#5A7B2F",
  black: "#000",
  white: "#ffffff",
  gray: "#8B8B8B",
  lightGray: "#d3d3d3",
  red: "#ff1717",
};

// 태그 정리된 값
export const TAG_VALUES = [
  "스터디",
  "힐링",
  "사진맛집",
  "뷰좋은",
  "데이트카페",
  "애견동반",
  "키즈존",
  "노키즈존",
  "갬성",
  "커피맛집",
  "로스팅카페",
  "베이커리카페",
  "디저트맛집",
  "테라스카페",
  "창고형카페",
  "가성비갑",
  "분위기좋은",
  "모임하기좋은",
  "브런치",
];
