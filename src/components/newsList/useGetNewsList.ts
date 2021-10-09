import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useGetNewsList = (uid: string) => {
  const [page, setPage] = useState(0);
  const [newsList, setNewsList] = useState<News[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetcher = (url: string, page: number, uid: string) => {
    return axios.post(url, { page, uid }).then((res) => {
      return res.data as NewsQuery;
    });
  };
  const { data, isValidating, error } = useSWR(
    ["/api/news", page, uid],
    fetcher
  );

  useEffect(() => {
    if (!data) return;

    setNewsList(data.newsList);
    setTotalPages(data.meta.totalPages);
  }, [data]);

  return {
    page,
    setPage,
    newsList,
    totalPages,
    isLoading: isValidating,
    error,
  };
};
