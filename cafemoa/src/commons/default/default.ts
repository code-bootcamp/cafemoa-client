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
  "사진찍기좋은카페",
  "뷰 좋은 카페",
  "데이트하기 좋은",
  "애견동반카페",
  "키즈존/노키즈존 카페",
  "갬성",
  "커피가맛있는 카페",
  "로스팅 카페",
  "베이커리 카페",
  "디저트가 맛있는 카페",
  "테라스가있는 ",
  "창고형 카페",
  "가성비좋은 카페",
  "조명이 있는 카페",
  "모임 하기좋은",
  "브런치",
];
