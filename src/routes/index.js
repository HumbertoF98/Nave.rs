import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Router from "./Route";
import SignIn from "../views/SignIn";
import Home from "../views/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Router path="/" exact component={SignIn} />
        <Router path="/inicio" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}