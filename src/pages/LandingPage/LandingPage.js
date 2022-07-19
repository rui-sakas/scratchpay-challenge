import React from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

const LandingPage = (props) => {
    return (
        <div className="app-background">
            <Header>
                <Login {...props} />
            </Header>
        </div>
    );
};

export default LandingPage;
