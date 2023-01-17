import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatecafeInformArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_OWNER_LOGGEDIN } from "../queries/useFetchUser";

interface IFormCreateCafeInformData {
  cafeinfo: string;
  operatingInfo: string;
  cafeAddr: string;
  detailAddr: string;
  notice: string;
  cafeTag: string[];
  is_WC: boolean;
  is_Wifi: boolean;
  is_Parking: boolean;
  menu_imageUrl: string[];
  cafe_imageUrl: string[];
}

export const CREATE_CAFE_INFORM = gql`
  mutation CreatecafeInform($cafeInformInput: CafeInformInput!) {
    CreatecafeInform(cafeInformInput: $cafeInformInput) {
      id
    }
  }
`;

export const useCreateCafeInform = () => {
  const [CreatecafeInform] = useMutation<
    Pick<IMutation, "CreatecafeInform">,
    IMutationCreatecafeInformArgs
  >(CREATE_CAFE_INFORM);

  const CreatecafeInformSubmit = async (data: IFormCreateCafeInformData) => {
    try {
      const result = await CreatecafeInform({
        variables: {
          cafeInformInput: {
            ...data,
          },
        },
        refetchQueries: [
          {
            query: FETCH_OWNER_LOGGEDIN,
          },
        ],
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    CreatecafeInformSubmit,
  };
};
