import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src="https://banner2.cleanpng.com/20180327/ivq/kisspng-canon-logo-chinese-5abb0d07a84971.2277272315222080076893.jpg"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};


export default Header;