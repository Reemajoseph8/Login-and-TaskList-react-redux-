import React, { useState } from "react";
import { TextField, Button, FormControl, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    background: "#000",
    color: "#fff",
    border: "1px solid #000",
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

const Signin = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const triggerLogin = (e) => {
    e.preventDefault();
    const body = { email: email, password: password };
    handleLogin(body);
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
          label="Email"
          value={email}
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl
        fullWidth
        className={`text-center py-2 my-2`}
        variant="outlined"
      >
        <TextField
          required
          id="outlined-required"
          type="password"
          label="Password"
          value={password}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <div className="text-center py-2">
        <Button
          className={classes.buttonStyle}
          size="large"
          onClick={triggerLogin}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Signin;
