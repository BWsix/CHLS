type News = {
  id: number;
  title: string;
  is_pinned: boolean;
  publish_date: string;
  views: number;
  office: string;
  source: string;
  type: string;
};

type NewsQuery = {
  meta: {
    pageNum: number;
    maxRows: number;
    totalPages: number;
  };
  newsList: News[];
};

type NewsAttachment = {
  fileName: string;
  fileUrl: string;
};

type NewsDetail = {
  content: string;
  attachments: NewsAttachment[];
};

type MetaTag = {
  title: string;
  description?: string;
  image: string;

  website?: string;
  facebook?: string;
  instagram?: string;
  github?: string;
};
