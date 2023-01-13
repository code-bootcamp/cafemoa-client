export const GetDate = (value: string) => {
  const WriteDate = new Date(value);
  const NowDate = new Date();
  const DateNum = Number(NowDate) - Number(WriteDate);

  const yyyy = WriteDate.getFullYear();
  const mm = WriteDate.getMonth() + 1;
  const dd = WriteDate.getDate();

  const times = [
    { time: "분", milliSeconds: 1000 * 60 },
    { time: "시간", milliSeconds: 1000 * 60 * 60 },
    { time: "일", milliSeconds: 1000 * 60 * 60 * 24 },
  ].reverse();

  const betweenTime = {
    time: "",
    value: 0,
  };
  for (const value of times) {
    //   const betweenTime = Math.floor(DateNum / value.milliSeconds);
    betweenTime.time = value.time;
    betweenTime.value = Math.floor(DateNum / value.milliSeconds);
    if (betweenTime.value > 0) {
      if (betweenTime.time === "일" && betweenTime.value > 7) {
        return `${yyyy}.${mm}.${dd}`;
      }
      return `${betweenTime.value}${betweenTime.time} 전`;
    }
  }
  return "방금 전";
};

export const GetStamp = (value: number) => {
  const result = value % 10;
  return result;
};

export const getExpiredDate = (value: string) => {
  const newDate = new Date(value);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();

  return `${year}. ${month}. ${date}`;
};

export const getStampSaveDate = (value: string) => {
  const newDate = new Date(value);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const hours = newDate.getHours();
  const mins = newDate.getMinutes();

  return `${year}. ${month}. ${date} ${hours}시 ${mins}분`;
};
