import React from "react";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import marked from "marked";

import { MarkdownWrapper } from "../../components";
import { MetaTag } from "../../components/shared";

interface PostProps {
  html: string;
  meta: MetaTag;
}

export const getStaticPaths = async () => {
  const paths = readdirSync("posts");

  return {
    paths: paths.map((path) => ({ params: { slug: path.replace(".md", "") } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const fileRaw = readFileSync(join("posts", slug + ".md")).toString();

  const parsed = matter(fileRaw);

  const html = marked(parsed.content, {
    gfm: true,
    breaks: true,
    headerIds: true,
    headerPrefix: "md-",
    langPrefix: "language-",
    mangle: true,
    smartLists: true,
    smartypants: true,
  });

  return {
    props: {
      html,
      meta: parsed.data,
    } as PostProps,
  };
};

const Post: React.FC<PostProps> = ({ html, meta }) => {
  return (
    <>
      <MetaTag
        title={meta.title}
        description={meta.description}
        image={meta.image}
      />

      <MarkdownWrapper html={html} meta={meta} />
    </>
  );
};
export default Post;
