import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => {
  return axios.get(url).then((res) => res.data as NewsDetail);
};

export const useGetNews = (id: number) => {
  const [newsContent, setNewsContent] = useState<string>();
  const [newsAttachments, setNewsAttachments] = useState<NewsAttachment[]>();
  const [toggle, setToggle] = useState(false);
  const { data, isValidating, error } = useSWR(
    toggle ? `/api/news/${id}` : null,
    fetcher
  );

  useEffect(() => {
    if (!data) return;

    setNewsContent(data.content);
    setNewsAttachments(data.attachments);
  }, [data]);

  return {
    toggle,
    setToggle,
    newsContent,
    newsAttachments,
    isLoading: isValidating,
    error,
  };
};
