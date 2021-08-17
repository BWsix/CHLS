import React from "react";

import { Grid, Link, CardActionArea } from "@material-ui/core";
import { Banner } from "./Banner";

interface ClubsProps {
  metaTags: MetaTag[];
  slugs: string[];
}

export const Clubs: React.FC<ClubsProps> = ({ metaTags, slugs }) => {
  return (
    <Grid container>
      {metaTags.map((meta, idx) => (
        <Grid item xs={12} sm={6} key={"clubs-" + idx}>
          <CardActionArea
            component={Link}
            href={"/club/" + slugs[idx]}
            color="inherit"
          >
            <Banner
              title={meta.title}
              description={meta.description}
              image={meta.image}
              smol
            />
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};
