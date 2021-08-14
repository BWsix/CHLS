import axios from "axios";
import { useEffect, useState } from "react";

export const useGetNewsList = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get("/api/news");

        setNewsList(res.data as News[]);
        setIsLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    getNews();
  }, []);

  return { newsList, isLoading, error };
};
