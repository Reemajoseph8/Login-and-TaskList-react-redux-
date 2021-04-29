import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles({
  root: {
    minWidth: 450,
  },
  container: {
    display: "flex",
    minHeight: " 100vh",
    justifyContent: "center",
    placeItems: "center",
    background: "rgba(0,0,0, 0.8)",
  },
  placeHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    cursor: "pointer",
  },
});

const ComponentContainer = ({
  children,
  showAction,
  title,
  operations,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          title={
            <div className={classes.placeHeader}>
              {title}
              {showAction && (
                <div>
                  <AddIcon
                    onClick={() =>
                      handleChange({
                        ...operations,
                        addEnable: !operations.addEnable,
                        editEnable: false,
                      })
                    }
                  />
                </div>
              )}
            </div>
          }
        />
        <CardContent className="d-block">{children}</CardContent>
      </Card>
    </div>
  );
};

export default ComponentContainer;
