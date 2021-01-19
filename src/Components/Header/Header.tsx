import React from 'react';

import {PATH} from "../../Routes/Routes";
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss'


const Header = () => {


    return (
        <nav>
            <div className={style.wrapper}>
                <NavLink
                    to={PATH.ENT_NEW_PASSWORD}
                    activeClassName={style.active}
                    >New Password</NavLink>
                <NavLink
                    to={PATH.REGISTRATION}
                    activeClassName={style.active}
                    >Registration</NavLink>
                <NavLink
                    to={PATH.PROFILE}
                    activeClassName={style.active}
                    >Profile</NavLink>
                <NavLink
                    to={PATH.PASSWORD_REC}
                    activeClassName={style.active}
                    >Password Recovery</NavLink>
                <NavLink
                    to={PATH.LOGIN}
                    activeClassName={style.active}
                >Login</NavLink>
                <NavLink
                    to={PATH.TEST}
                    activeClassName={style.active}
                >Test</NavLink>
            </div>
        </nav>
    );
};

export default Header;