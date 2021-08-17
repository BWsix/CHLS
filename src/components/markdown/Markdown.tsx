import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = (theme: any) => ({
  listItem: {
    marginLeft: theme.spacing(3),
  },
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h3",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h4" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "h5" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1", paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(
        ({ classes, ...props }: { classes: any }) => (
          <li className={classes.listItem}>
            <Typography component="span" {...props} />
          </li>
        )
      ),
    },
    ul: {
      component: withStyles(styles)(
        ({ classes, ...props }: { classes: any }) => (
          <Typography
            component="ul"
            style={{ paddingBottom: "12px" }}
            {...props}
          ></Typography>
        )
      ),
    },
    ol: {
      component: withStyles(styles)(
        ({ classes, ...props }: { classes: any }) => (
          <Typography
            component="ol"
            style={{ paddingBottom: "12px" }}
            {...props}
          ></Typography>
        )
      ),
    },
  },
};

export const Markdown = (props: any) => {
  return <ReactMarkdown options={options} {...props} />;
};
