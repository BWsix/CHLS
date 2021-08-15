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
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [uid, setUid] = useState(UidTable[0].uid);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
            setUid(UidTable[newValue].uid);
          }}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
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
