import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../components/Shared/constants';
import HomeView from '../views/Home/Home';
import RobotsView from '../views/Robots/Robots';
import WebSiteView from '../views/WebSites/WebSites';

function Routes () {
    return (
        <Switch>
            <Route exact path={routes.home}>
                <HomeView />
            </Route>

            <Route exact path={routes.criacaoDeRobos}>
                <RobotsView />
            </Route>

            <Route exact path={routes.criacaoDeSites}>
                <WebSiteView />
            </Route>
        </Switch>
    );
}

export default Routes;