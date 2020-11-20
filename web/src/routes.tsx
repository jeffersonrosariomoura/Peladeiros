import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Landing from './pages/Landing';
import Player from './pages/Player';
import Match from './pages/Match';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/player" component={Player}  />
            <Route path="/match" component={Match}  />
        </BrowserRouter>
    )
}

export default Routes;