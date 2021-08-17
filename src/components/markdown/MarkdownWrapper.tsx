import React from "react";
import { Markdown } from "../../components/markdown/Markdown";
import { Banner, Navbar } from "../";

import { Container, makeStyles, Link, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkIcon from "@material-ui/icons/Link";

import styles from "../../styles/Markdown.module.css";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

interface MarkdownWrapperProps {
  html: string;
  meta: MetaTag;
}

export const MarkdownWrapper: React.FC<MarkdownWrapperProps> = ({
  html,
  meta,
}) => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
        <Banner
          title={meta.title}
          description={meta.description}
          image={meta.image}
        >
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            {[meta.website, meta.github, meta.instagram, meta.facebook].map(
              (src, idx) => {
                if (src) {
                  return (
                    <IconButton key={"clubs-" + meta.title + idx}>
                      <Link
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="textPrimary"
                      >
                        {idx === 0 ? (
                          <LinkIcon color="inherit" />
                        ) : idx === 1 ? (
                          <GithubIcon color="inherit" />
                        ) : idx === 2 ? (
                          <InstagramIcon color="inherit" />
                        ) : (
                          <FacebookIcon color="inherit" />
                        )}
                      </Link>
                    </IconButton>
                  );
                }
              }
            )}
          </div>
        </Banner>
      </Container>

      <Container maxWidth="md" className={styles.markdown}>
        <Markdown className={classes.markdown}>{html}</Markdown>
      </Container>
    </>
  );
};
