import axios from "axios";
import { useEffect, useState } from "react";

export const useGetNews = (id: number) => {
  const [newsContent, setNewsContent] = useState<string>();
  const [newsAttachments, setNewsAttachments] = useState<NewsAttachment[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!toggle) return;

    const getNews = async () => {
      try {
        const { data: newsDetail } = await axios.get("/api/news/" + id);

        setNewsContent((newsDetail as NewsDetail).content);
        setNewsAttachments((newsDetail as NewsDetail).attachments);
        setIsLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    getNews();
  }, [toggle]);

  useEffect(() => {
    setToggle(false);
    setNewsContent("");
    setNewsAttachments([]);
    setIsLoading(true);
  }, [id]);

  return { toggle, setToggle, newsContent, newsAttachments, isLoading, error };
};
