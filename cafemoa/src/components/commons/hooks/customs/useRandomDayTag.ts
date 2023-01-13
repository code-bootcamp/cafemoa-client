import { TAG_VALUES } from "../../../../commons/default/default";

export const getRandomDday = async () => {
  const localTag = JSON.parse(localStorage.getItem("todayTag") ?? "{}");
  const todayRandomNum = Math.floor(Math.random() * 1);
  const todayRandomTag = TAG_VALUES[todayRandomNum];
  const newDate = new Date();
  const dd = newDate.getDate();
  if (localTag.date === dd) return;
  const todayData = {
    ...localTag,
    tag: [todayRandomTag],
    date: dd,
  };
  localStorage.setItem("todayTag", JSON.stringify(todayData));
};
