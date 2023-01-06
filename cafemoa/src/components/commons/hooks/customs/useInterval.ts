import { useEffect, useRef, useState } from "react";

export function useAuthTimer(callback: any, timer: number) {
  const savedCallback = useRef<any>(null);
  const [countText, setCountText] = useState("");
  const [countNum, setCountNum] = useState(timer - 1);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (countNum === undefined) return;
    if (countNum === -1) {
      savedCallback.current();
      return;
    }
    const timerId = setInterval(() => {
      const min = String(Math.floor(countNum / 60));
      const sec = String(countNum % 60).padStart(2, "0");
      setCountNum(countNum - 1);
      setCountText(`${min} : ${sec} `);
    }, 1000);

    if (countNum === -1) {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [countNum]);
  return { countText };
}
