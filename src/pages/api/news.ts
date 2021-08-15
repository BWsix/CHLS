import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_NEWS =
  "https://www.clhs.tyc.edu.tw/ischool/widget/site_news/news_query_json.php";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const page = req.body.page as number;
  const uid = req.body.uid as string;

  const result = await axios.post(
    API_NEWS,
    `field=time&order=DESC&pageNum=${page}&maxRows=${10}&keyword=&uid=${uid}&tf=1&auth_type=user&use_cache=1`,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }
  );
  const [meta, ..._newsList] = result.data;

  const newsList = _newsList.map(
    (news: {
      newsId: any;
      top: any;
      time: any;
      attr_name: any;
      title: any;
      unit_name: any;
      name: any;
      clicks: any;
    }) =>
      ({
        id: Number(news.newsId),
        is_pinned: Boolean(news.top),
        publish_date: news.time,
        type: news.attr_name,
        title: news.title,
        source: news.unit_name,
        office: news.name,
        views: Number(news.clicks),
      } as News)
  );

  res.status(200).json({ meta, newsList });
}
