import React from "react";
import { uniq } from "lodash";
import { News } from "./News";
import { useGetNewsList } from "./useGetNewsList";

import { LinearProgress, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";

export const NewsList: React.FC<{ uid: string }> = ({ uid }) => {
  const { page, setPage, newsList, totalPages, isLoading, error } =
    useGetNewsList(uid);

  if (error) return <Alert severity="error">Error</Alert>;
  return isLoading ? (
    <LinearProgress />
  ) : (
    <div>
      {uniq(newsList.map((news) => news.publish_date)).map(
        (publishDate, idx) => {
          return (
            <React.Fragment key={idx}>
              <Typography variant="h6">{publishDate}</Typography>

              {newsList
                .filter((news) => news.publish_date === publishDate)
                .map((news, idx) => {
                  return <News news={news} key={idx} />;
                })}
            </React.Fragment>
          );
        }
      )}

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={(_, value: number) => {
            setPage(value - 1);
          }}
          showFirstButton
        />
      </div>
    </div>
  );
};
