import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../components/Shared/constants";
import HomeView from "../views/Home/Home";
import RobotsView from "../views/Robots/Robots";
import WebSiteView from "../views/WebSites/WebSites";

function Routes() {
  return (
    <Switch>
      <Route exact path={routes.home} component={HomeView} />

      <Route path={routes.criacaoDeRobos} component={RobotsView} />

      <Route path={routes.criacaoDeSites} component={WebSiteView} />
    </Switch>
  );
}

export default Routes;
