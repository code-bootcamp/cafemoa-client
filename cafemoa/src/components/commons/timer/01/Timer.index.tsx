import { useEffect, useState } from "react";

interface ITimer {
  active: boolean;
  onCheckTime: (authOption: string) => void;
  authOption: string;
}

export default function Timer({ active, onCheckTime, authOption }: ITimer) {
  // 5분 고정이 아닐 경우 Props로 전달
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    // clearInterval(timer);
    if (active === undefined && !active) return;
    const timer = setInterval(() => {
      if (Number(sec) > 0) {
        setSec(Number(sec) - 1);
      }
      if (Number(sec) === 0) {
        if (Number(min) === 0) {
          clearInterval(timer);
          void onCheckTime(authOption);
        } else {
          setMin(Number(min) - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [min, sec, active]);

  return (
    <>
      {min}:{sec < 10 ? `0${sec}` : sec}
    </>
  );
}
