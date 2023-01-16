import { ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroller";

interface IInfiniteScrollWrapProps {
  children: ReactNode;
  onHandleMore: () => void;
}

export default function InfiniteScrollWrap(props: IInfiniteScrollWrapProps) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onHandleMore}
      hasMore={true}
      loader={<div className="loader" key={0}></div>}
    >
      {props.children}
    </InfiniteScroll>
  );
}
