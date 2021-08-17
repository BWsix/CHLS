import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Calendar, Navbar, NewsGroup, Banner, Apps } from "../components";
import { MainTitle, MetaTag } from "../components/shared";
import { Clubs } from "../components/banner/Clubs";

import { Container } from "@material-ui/core";

export const getStaticProps = () => {
  const paths = readdirSync("posts");

  const metaTags = paths.map((path) => {
    const file = readFileSync(join("posts", path));
    const parsed = matter(file);
    return parsed.data;
  });
  const slugs = paths.map((path) => path.replace(".md", ""));

  return { props: { metaTags, slugs } };
};

const Home: React.FC<{ metaTags: MetaTag[]; slugs: string[] }> = ({
  metaTags,
  slugs,
}) => {
  return (
    <>
      <MetaTag
        title="中壢大中官網"
        description="您最值得信賴的網站"
        image="https://i.imgur.com/Bf3la7K.png"
      />

      <Container maxWidth="lg">
        <Navbar
          sections={[
            { title: "官方社團/校隊", url: "#clubs" },
            { title: "官方app", url: "#apps" },
            { title: "官方公告", url: "#news" },
            { title: "官方行事曆", url: "#calendar" },
          ]}
        />

        <Banner
          title="中壢大中"
          description="您最值得信賴的網站"
          image="https://i.imgur.com/Bf3la7K.png"
        />
      </Container>

      <Container maxWidth="md">
        <div id="clubs" />
        <MainTitle title="官方社團/校隊" />
        <Clubs metaTags={metaTags} slugs={slugs} />

        <div id="apps" />
        <MainTitle title="官方app" />
        <Apps />

        <div id="news" />
        <MainTitle title="官方公告" />
        <NewsGroup />

        <div id="calendar" />
        <MainTitle title="官方行事曆" />
        <Calendar />
      </Container>
    </>
  );
};
export default Home;
