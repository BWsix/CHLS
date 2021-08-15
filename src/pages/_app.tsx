import React from "react";
import type { AppProps } from "next/app";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { pink, blue } from "@material-ui/core/colors";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: pink,
      secondary: blue,
      background: {
        default: "#000",
        paper: "#222",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
