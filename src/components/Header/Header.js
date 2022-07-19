import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {
    return (
        <>
            <div className="navbar">
                <NavLink className="navbar-logo" to={'/'}>
                    <span className="logo" />
                </NavLink>
            </div>
            <main>
                <div>{children}</div>
            </main>
        </>
    );
};

export default Header;
