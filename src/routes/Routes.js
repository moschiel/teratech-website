import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from '../views/Home/Home';
import RobotsView from '../views/Robots/Robots';
import WebSiteView from '../views/WebSites/WebSites';

function Routes () {
    return (
        <Switch>
            <Route exact path="/">
                <HomeView />
            </Route>

            <Route exact path="/criacao-de-robos">
                <RobotsView />
            </Route>

            <Route exact path="/criacao-de-sites">
                <WebSiteView />
            </Route>
        </Switch>
    );
}

export default Routes;