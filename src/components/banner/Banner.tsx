import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
  },
}));

interface BannerProps {
  title: string;
  description?: string;
  image: string;
  smol?: true;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  image,
  smol,
  children,
}) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.overlay} />
      <div className={classes.mainFeaturedPostContent}>
        <Typography
          component="h1"
          variant={smol ? "h5" : "h3"}
          color="inherit"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant={smol ? undefined : "h5"} color="inherit" paragraph>
          {description}
        </Typography>

        {children}
      </div>
    </Paper>
  );
};
