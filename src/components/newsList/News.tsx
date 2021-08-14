import React from "react";

interface NewsProps {
  news: News;
}

export const News: React.FC<NewsProps> = ({ news }) => {
  return (
    <div>
      <h3>{news.title}</h3>
      {news.publish_date}
      <p>
        {news.office} {news.type} {news.views}
      </p>
    </div>
  );
};
