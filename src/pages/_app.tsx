import React from "react";
import type { AppProps } from "next/app";
import { Footer } from "../components";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>
  );
}
export default MyApp;
