import axios from "axios";
import { useEffect, useState } from "react";

export const useGetNewsList = (uid: string) => {
  const [page, setPage] = useState(0);
  const [newsList, setNewsList] = useState<News[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPage(0);
    setIsLoading(true);
  }, [uid]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.post("/api/news", { page, uid });
        const data: NewsQuery = res.data;

        setNewsList(data.newsList);
        setTotalPages(data.meta.totalPages);
        setIsLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    getNews();
  }, [uid, page]);

  return { page, setPage, newsList, totalPages, isLoading, error };
};
