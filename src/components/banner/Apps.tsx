import React from "react";
import { Banner } from "..";
import { Grid, Link, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

interface AppsProps {}

export const Apps: React.FC<AppsProps> = ({}) => {
  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <Banner
          title="CLHS nowotify"
          description="使用 Discord / Line 及時接收壢中官網公告"
          image="https://i.imgur.com/bOJFnys.png"
          smol
        >
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <IconButton>
              <Link
                href="https://github.com/bwsix/CLHS-nowotify"
                target="_blank"
                rel="noopener noreferrer"
                color="textPrimary"
              >
                <GitHubIcon color="inherit" />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                href="https://bwsix.github.io/CLHS-nowotify"
                target="_blank"
                rel="noopener noreferrer"
                color="textPrimary"
              >
                <LinkIcon color="inherit" />
              </Link>
            </IconButton>
          </div>
        </Banner>
      </Grid>

      <Grid item sm={6} xs={12}>
        <Banner
          title="Shite."
          description="The next generation of social media created using create-react-app."
          image="https://i.imgur.com/G69TePm.png"
          smol
        >
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <IconButton>
              <Link
                href="https://github.com/BWsix/shite"
                target="_blank"
                rel="noopener noreferrer"
                color="textPrimary"
              >
                <GitHubIcon color="inherit" />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                href="https://bwsix.github.io/shite"
                target="_blank"
                rel="noopener noreferrer"
                color="textPrimary"
              >
                <LinkIcon color="inherit" />
              </Link>
            </IconButton>
          </div>
        </Banner>
      </Grid>
    </Grid>
  );
};
