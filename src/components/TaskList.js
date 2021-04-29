import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import EditTask from "./EditTask";

const useStyles = makeStyles({
  rootShow: {
    minWidth: 450,
  },
  containerShow: {
    margin: "1.5rem 0",
    display: "flex",
    justifyContent: "center",
    placeItems: "center",
    background: "rgba(0,0,0, 0.8)",
  },
  placeHeaderShow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyleShow: {
    cursor: "pointer",
  },
});

const TaskList = ({ id, getTasks }) => {
  const { edit, setEdit } = useState(false);
  useEffect(() => {
    getTasks();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.containerShow}>
      <Card className={classes.rootShow}>
        <CardHeader
          title={
            <div className={classes.placeHeaderShow}>
              {"task 1"}
              <div>
                <Button>
                  <CreateIcon onClick={() => console.log("click")} />
                </Button>
              </div>
            </div>
          }
        />
        <CardContent>
          <EditTask id={id} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskList;
