import React from "react";
import "../styles/styles.scss";
import Error from "../components/Error";
import Title from "../components/Title";
import { useSelector } from "react-redux";

function Header(props) {
  const error = useSelector((state) => state.Meals.errors);

  return error.length > 0 ? (
    <>
      <Error error={error} />
      <Title />
    </>
  ) : (
    <Title />
  );
}

export default Header;
