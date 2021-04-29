import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  makeStyles,
  Grid,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    background: "#000",
    color: "#fff",
    border: "1px solid #000",
    margin: "0 5px",
    "&:hover": {
      color: "#000",
      background: "#fff",
      border: "1px solid #000",
    },
    "&:disabled": {
      background: "rgba(0,0,0, 0.8)",
      color: "#fff",
    },
  },
}));

const AddTask = ({ handleChange, operations }) => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  
  const cancelForm = (e) => {
    handleChange({
      ...operations,
      addEnable: !operations.addEnable,
    });
  };

  return (
    <>
      <FormControl
        fullWidth
        className={`text-center py-2 my-2`}
        variant="outlined"
      >
        <TextField
          required
          id="outlined-required"
          label="Task Description"
          value={description}
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <FormControl
            fullWidth
            className={`text-center py-2 my-2`}
            variant="outlined"
          >
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue="2017-05-24"
              // className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6}>
          <FormControl
            fullWidth
            className={`text-center py-2 my-2`}
            variant="outlined"
          >
            <TextField
              id="time"
              label="Time"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <FormControl
        fullWidth
        className={`text-center py-2 my-2`}
        variant="outlined"
      >
        <Select
          native
          // value={state.age}
          // onChange={handleChange}
          inputProps={{
            name: "age",
            id: "filled-age-native-simple",
          }}
        >
          <option value="lead_58be137bfde045e7a0c8d107783c4598">User</option>
        </Select>
      </FormControl>

      {/* <div className={classes.buttonContainer}> */}

      <div className="text-right py-2">
        <Button
          className={classes.buttonStyle}
          size="large"
          onClick={cancelForm}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          className={classes.buttonStyle}
          size="large"
          // onClick={triggerLogin}
          disabled={loading}
        >
          Add
        </Button>
      </div>
      {/* </div> */}
    </>
  );
};

export default AddTask;
