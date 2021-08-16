import type { NextPage } from "next";
import { Calendar, Navbar, NewsGroup, Banner, Footer } from "../components";
import Head from "next/head";

import { Container } from "@material-ui/core";
import { MainTitle } from "../components/shared/MainTitle";
import { Apps } from "../components/banner/Apps";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>中壢大中官網</title>
        <meta name="title" content="中壢大中官網" />
        <meta name="description" content="您最值得信賴的網站" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/BWsix/CHLS" />
        <meta property="og:title" content="中壢大中官網" />
        <meta property="og:description" content="您最值得信賴的網站" />
        <meta property="og:image" content="https://i.imgur.com/Bf3la7K.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://github.com/BWsix/CHLS" />
        <meta property="twitter:title" content="中壢大中官網" />
        <meta property="twitter:description" content="您最值得信賴的網站" />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/Bf3la7K.png"
        />
      </Head>

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
