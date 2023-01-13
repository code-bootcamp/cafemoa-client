import { Modal } from "antd";
import axios from "axios";
import { useState } from "react";

const SERVICEKEY = process.env.NEXT_PUBLIC_BUSINESSMAN_API_KEY;

export const useBusinessCheck = () => {
  const [businessCheck, setBusinessCheck] = useState("");
  const checkBusinessSubmit = async (data: string) => {
    console.log(data);
    try {
      const api = await axios({
        method: "post",
        url: `https://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=${String(
          SERVICEKEY
        )}`,
        headers: {
          "Content-Type": `application/json`,
        },
        data,
      });
      setBusinessCheck(api.data.data[0].valid);
      if (api.data.data[0].valid === "02") {
        Modal.warning({
          content: api.data.data[0].valid_msg,
        });
        return;
      } else {
        Modal.success({
          content: "인증이 완료 되었습니다.",
        });
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    checkBusinessSubmit,
    businessCheck,
  };
};
