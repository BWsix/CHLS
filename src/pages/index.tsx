import type { NextPage } from "next";
import {
  Calendar,
  Navbar,
  NewsGroup,
  Banner,
  Footer,
  Apps,
} from "../components";
import { MainTitle, MetaTag } from "../components/shared";

import { Container } from "@material-ui/core";

const Home: NextPage = () => {
  return (
    <>
      <MetaTag
        title="中壢大中官網"
        description="您最值得信賴的網站"
        image="https://i.imgur.com/Bf3la7K.png"
      />

      <Container maxWidth="lg">
        <Navbar
          title="中壢大中"
          sections={[
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

      <Footer />
    </>
  );
};

export default Home;
