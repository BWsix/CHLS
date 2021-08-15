import React from "react";
import Typography from "@material-ui/core/Typography/Typography";

interface MainTitleProps {
  title: string;
}

export const MainTitle: React.FC<MainTitleProps> = ({ title }) => {
  return (
    <Typography component="h1" variant="h3" style={{ padding: "16px 0" }}>
      <b>{title}</b>
    </Typography>
  );
};
