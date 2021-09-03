import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from "./Landing";
import App from "./App";
import NotFound from "./NotFound";



function Router(props) {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Landing}/>
                <Route path='/restaurant/:restaurantId' component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;