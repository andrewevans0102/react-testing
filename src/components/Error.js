import React from "react";
import "../styles/styles.scss";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  error: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Fugaz One",
    fontSize: "40px",
    margin: "20px",
    color: "#FF0000",
  },
}));

function Error(props) {
  const classes = useStyles();

  return (
    <Typography variant="h2" gutterBottom className={classes.error}>
      {props.error && props.error.map((value) => value.message)}
    </Typography>
  );
}

export default Error;
