import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  console.log(aaa);
  useEffect(() => {
    // const result = localStorage.getItem("accessToken") ?? "";
    void aaa.toPromise().then((newAccessToken) => {
      console.log(newAccessToken);
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크하기(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              // 3. 재발급 받은 accessToken으로 방금 수정한 쿼리의 정보를 수정하기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // header 안에 Authorization : Bearer asdfdfdfs => 만료된 토큰이 추가되어 있는 상태
                  // 기존에 있던 headers 살려주기
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backkim.shop/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
          <>
            <ApolloProvider client={client}>{props.children}
            
            </ApolloProvider>
          </>
        );
}
