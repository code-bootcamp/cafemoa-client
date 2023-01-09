import { useRouter } from "next/router";

export const useRouterPush = () => {
  const router = useRouter();

  const routerPush = (path: string) => {
    void router.push(`${path}`);
  };
  const onClickRouterPush = (path: string) => (event: MouseEvent) => {
    void router.push(`${path}`);
  };
  const onClickHistoryBack = () => {
    history.back();
  };

  return {
    routerPush,
    onClickRouterPush,
    onClickHistoryBack,
  };
};
