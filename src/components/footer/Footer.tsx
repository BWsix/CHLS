import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Divider } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/bwsix">
        VFLC
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    adding: theme.spacing(3, 2),
    marginTop: "auto",
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <CssBaseline />
      <Container maxWidth="md">
        <Divider />
        <Typography variant="body1">中壢大中官網 by VFLC</Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
