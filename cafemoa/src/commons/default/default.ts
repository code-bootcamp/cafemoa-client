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
  "루프탑",
  "사진맛집",
  "뷰맛집",
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
  "분위기있는",
  "모임하기좋은",
  "브런치",
];

export const SELECT_VALUES02 = [
  { label: "전체", value: "" },
  { label: "서울특별시", value: "서울" },
  { label: "경기도", value: "경기" },
  { label: "인천광역시", value: "인천" },
  // { label: "강원도", value: "강원" },
  // { label: "충청북도", value: "충북" },
  // { label: "충청남도", value: "충남" },
  // { label: "전라북도", value: "전북" },
  // { label: "전라남도", value: "전남" },
  // { label: "경상북도", value: "경북" },
  // { label: "경상남도", value: "경남" },
  // { label: "광주광역시", value: "광주" },
  // { label: "대구광역시", value: "대구" },
  // { label: "대전광역시", value: "대전" },
  // { label: "부산광역시", value: "부산" },
  // { label: "세종특별자치시", value: "세종" },
  // { label: "울산광역시", value: "울산" },
  // { label: "제주도", value: "제주도" },
];
