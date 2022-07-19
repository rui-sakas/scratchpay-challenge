import React from 'react';
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';
import ProtectedRoute from './routes.protected';
import Users from '../pages/Users/Users';
import LandingPage from '../pages/LandingPage/LandingPage';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <ProtectedRoute path="/app" component={Users} />
                <Redirect to={'/'} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
