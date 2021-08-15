import axios from "axios";
import cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

const API_NEWS =
  "https://www.clhs.tyc.edu.tw/ischool/public/news_view/show.php?nid=";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const { data: html } = await axios.get(API_NEWS + id);

  const $ = cheerio.load(html);
  const content = $("#content").html()?.trim();

  const attachmentParser = () => {
    const script: string[] = $("script")
      .get()[1]
      // @ts-ignore
      .children[0].data.trim()
      .split("\n");

    const api = ` https://www.clhs.tyc.edu.tw/ischool/resources/${
      script[3].split('"')[1]
    }/${script[4].split('"')[1]}/attached/`;

    const attachmentList: [string[]] = JSON.parse(script[1].split("'")[1]);

    return attachmentList.map((tuple) => {
      const fileName = tuple[2].replace(/%.{5}/g, (match, _) => {
        return String.fromCharCode(parseInt(match.slice(2), 16));
      });

      return {
        fileName: fileName,
        fileUrl: api + fileName,
      } as NewsAttachment;
    });
  };
  const attachments = attachmentParser();

  res.status(200).json({ content, attachments });
}
