import type { NextPage } from "next";
import { Calendar, NewsGroup } from "../components";
import Head from "next/head";

import { Container, Typography, Divider } from "@material-ui/core";
import { MainTitle } from "../components/shared/MainTitle";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>中壢大中官網</title>
      </Head>

      <Container maxWidth="md">
        <MainTitle title="官網公告" />
        <NewsGroup />

        <MainTitle title="行事曆" />
        <Calendar />
      </Container>
    </>
  );
};

export default Home;
