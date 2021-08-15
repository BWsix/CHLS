import React, { useState } from "react";
import { UidTable } from "../../../data/uidTable";

import { makeStyles, Theme, Tab, Tabs, AppBar } from "@material-ui/core";
import { NewsList } from "./NewsList";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
}));

interface NewsGroupProps {}

export const NewsGroup: React.FC<NewsGroupProps> = ({}) => {
  const [value, setValue] = useState(0);
  const [uid, setUid] = useState(UidTable[0].uid);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
            setUid(UidTable[newValue].uid);
          }}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="on"
        >
          {UidTable.map(({ name, uid }) => {
            return <Tab label={name} key={uid} />;
          })}
        </Tabs>
      </AppBar>

      <NewsList uid={uid} />
    </div>
  );
};
