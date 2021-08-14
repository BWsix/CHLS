import React from "react";
import { News } from "./News";
import { useGetNewsList } from "./useGetNewsList";

interface NewsListProps {}

export const NewsList: React.FC<NewsListProps> = ({}) => {
  const { newsList, isLoading, error } = useGetNewsList();

  if (error) return <div>error</div>;
  return (
    <div>
      {isLoading
        ? "loading..."
        : newsList.map((news, idx) => {
            return <News news={news} key={idx} />;
          })}
    </div>
  );
};
