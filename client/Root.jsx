import "normalize.css"; // first
import "@proto-component/react-library-a/styles.css"; // second
import "./styles/global.css"; // third
import "./Root.scss";

import React from "react";
import { Route, Switch } from "react-router-dom";

import { Navigation } from "./components";
import { HomePage, OrdersPage, UsersPage } from "./pages";

export const COMPONENT_NAME = "Root";

export const Root = () => (
  <div className={COMPONENT_NAME}>
    <Navigation />
    <main className={`${COMPONENT_NAME}__main`}>
      <Switch>
        <Route exact path={"/"} render={() => <HomePage />} />
        <Route path={"/orders/"} render={() => <OrdersPage />} />
        <Route path={"/users/"} render={() => <UsersPage />} />
        <Route render={() => <div className={"NotFound"}>Not Found</div>} />
      </Switch>
    </main>
  </div>
);

Root.displayName = COMPONENT_NAME;
