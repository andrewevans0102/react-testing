import React from "react";
import "../styles/styles.scss";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Fugaz One",
    fontSize: "40px",
    margin: "20px",
  },
}));

function Title(props) {
  const classes = useStyles();

  return (
    <Typography
      variant="h1"
      component="h2"
      gutterBottom
      className={classes.title}
    >
      Chessie Chow Chow
    </Typography>
  );
}

export default Title;
