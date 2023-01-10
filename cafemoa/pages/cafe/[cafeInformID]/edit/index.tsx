import { useFetchCafeInform } from "../../../../src/components/commons/hooks/queries/useFetchCafeInform";
import SignUpCafeInfo from "../../../../src/components/units/signupcafeinfo/SignupCafeInfo.index";

export default function EditCafeInformPage() {
  const { data } = useFetchCafeInform();

  return <SignUpCafeInfo data={data} />;
}
