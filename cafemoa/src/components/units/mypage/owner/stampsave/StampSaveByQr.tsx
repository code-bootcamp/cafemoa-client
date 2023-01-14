import * as S from "./StampSave.styles";
import Box01 from "../../../../commons/box/01/Box01.index";
import { useEffect, useState } from "react";
import { useHtml5QrCodeScanner } from "react-html5-qrcode-reader";
import { useFetchMyCafes } from "../../../../commons/hooks/queries/useFetchMyCafes";
import StampSaveQrModal from "./StampSaveByQrModal";

const html5QrCodeScannerFile = "/html5-qrcode.min.js";

export default function StampSaveByQr() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const { mycafedata } = useFetchMyCafes();
  const cafeId = mycafedata?.fetchMyCafes[0].id;
  console.log(cafeId);

  const onClickIsModalOpen = (prev: boolean) => {
    setIsModalOpen(prev);
  };

  const { Html5QrcodeScanner } = useHtml5QrCodeScanner(html5QrCodeScannerFile);
  console.log(Html5QrcodeScanner);

  const onScanSuccess = (decodedText: string, decodedResult: string) => {
    console.log(`Scan 결과 : ${decodedText}`, decodedResult);

    setSearchValue(decodedText.slice(-11));
    console.log(searchValue);
    console.log(isModalOpen);
    onClickIsModalOpen(true);
    Html5QrcodeScanner.clear();
  };

  useEffect(() => {
    if (Html5QrcodeScanner) {
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );
      if (!isModalOpen) {
        html5QrcodeScanner.render(onScanSuccess);
        if (searchValue !== "") {
          Html5QrcodeScanner.clear();
        }
      }
    }
  }, [Html5QrcodeScanner]);

  return (
    <>
      {isModalOpen && (
        <S.ModalWrap
          open={true}
          footer={null}
          centered={true}
          onCancel={() => {
            onClickIsModalOpen(false);
          }}
        >
          <StampSaveQrModal searchValue={searchValue} />
        </S.ModalWrap>
      )}
      <S.StampWrapper>
        <Box01 styles={{ padding: "40px 50px" }}>
          <S.StampContainer>
            <S.QrWrapper>
              <S.QrReader id="reader"></S.QrReader>
            </S.QrWrapper>
          </S.StampContainer>
        </Box01>
      </S.StampWrapper>
    </>
  );
}
