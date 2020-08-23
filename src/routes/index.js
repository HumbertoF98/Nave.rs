import React from "react";
import { Switch } from "react-router-dom";
import Router from "./Route";
import SignIn from "../views/SignIn";
import Home from "../views/Home";
import CreateNaver from "../views/CreateNaver";

/*
Navigation routes
 */
export default function Routes() {
  return (
    <Switch>
      <Router path="/" exact component={SignIn} />
      <Router path="/inicio" component={Home} isPrivate />
      <Router path="/adicionar-naver" component={CreateNaver} isPrivate />
      <Router path="*" component={() => <h1>Ops... página não encontrada :(</h1>} />
    </Switch>
  );
}