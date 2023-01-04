import { Modal } from "antd";
import { MouseEvent, useState } from "react";
import * as S from "./PartnerStamp-Pagination.styles";

export default function Pagination01UI(props) {
  const [startPage, setStartPage] = useState(1);
  const [pageClick, setPageClick] = useState(1);
  const lastPage = count !== null ? Math.ceil(props.count / 10) : 1;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    setPageClick(Number(event.currentTarget.id));
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      Modal.warning({
        content: "첫번째 페이지 입니다.",
      });
      return;
    }
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
    setPageClick(startPage - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
      setPageClick(startPage + 10);
    }
  };
  return (
    <div>
      <S.MovePage onClick={onClickPrevPage}>
        <S.PrevBtn disabled={startPage === 1} />
      </S.MovePage>

      {new Array(10).fill(1).map(
        (el, index) =>
          startPage + index <= lastPage && (
            <S.PageNumber
              key={startPage + index}
              id={String(startPage + index)}
              onClick={onClickPage}
              pageClick={pageClick === startPage + index ? true : false}
            >
              {startPage + index}
            </S.PageNumber>
          )
      )}

      <S.MovePage onClick={onClickNextPage}>
        <S.NextBtn disabled={startPage + 10 >= lastPage} />
      </S.MovePage>
    </div>
  );
}
