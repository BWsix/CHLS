import React from "react";
import { useGetNews } from "./useGetNews";

import {
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,
  makeStyles,
  createStyles,
  Theme,
  Button,
  LinearProgress,
  Divider,
  Chip,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";
import LinkIcon from "@material-ui/icons/Link";
import Alert from "@material-ui/lab/Alert";

import styles from "./News.module.css";

const API_NEWS =
  "https://www.clhs.tyc.edu.tw/ischool/public/news_view/show.php?nid=";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      marginLeft: "16px",
      fontSize: theme.typography.pxToRem(15),
    },
    chip: {
      marginRight: "5px",
    },
  })
);

export const News: React.FC<{ news: News }> = ({ news }) => {
  const { toggle, setToggle, newsContent, newsAttachments, isLoading, error } =
    useGetNews(news.id);

  const classes = useStyles();

  if (error) return <Alert severity="error">Error</Alert>;
  return (
    <Accordion expanded={toggle} onChange={() => setToggle((prev) => !prev)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <InfoIcon
          color={
            news.views >= 420
              ? "primary"
              : news.is_pinned
              ? "secondary"
              : undefined
          }
        />
        <Typography className={classes.heading}>{news.title}</Typography>
      </AccordionSummary>

      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <AccordionDetails>
            <Chip
              label={news.office + " " + news.type}
              className={classes.chip}
              variant="outlined"
            />
            <Chip
              label={`${news.views} 次瀏覽`}
              color={news.views >= 420 ? "primary" : undefined}
              variant="outlined"
              className={classes.chip}
            />
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<LinkIcon />}
              onClick={() => {
                const win = window.open(API_NEWS + news.id, "_blank");
                win!.opener = null;
              }}
            >
              查看公告{newsAttachments?.length ? " (附件)" : undefined}
            </Button>
          </AccordionDetails>

          {newsAttachments?.length ? (
            <AccordionDetails>
              <div>
                附件 :{" "}
                {newsAttachments.map(({ fileName }, idx) => (
                  <span key={idx}>
                    {fileName}
                    {idx !== newsAttachments.length - 1 && " / "}
                  </span>
                ))}
              </div>
            </AccordionDetails>
          ) : undefined}

          {newsContent?.length ? (
            <>
              <Divider />

              <AccordionDetails>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                    __html: newsContent,
                  }}
                />
              </AccordionDetails>
            </>
          ) : undefined}
        </>
      )}
    </Accordion>
  );
};
