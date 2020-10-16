import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Landing from './pages/Landing';
import Player from './pages/Player';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/player" component={Player}  />
        </BrowserRouter>
    )
}

export default Routes;