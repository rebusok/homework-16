import React from 'react';
import style from './Header.module.scss'
import {PATH} from "../../Rroutes/Routes";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav>
            <div >
                <NavLink
                    to={PATH.ENT_NEW_PASSWORD}

                    >New Password</NavLink>
                <NavLink
                    to={PATH.REGISTRATION}

                    >Registration</NavLink>
                <NavLink
                    to={PATH.PROFILE}

                    >Profile</NavLink>
                <NavLink
                    to={PATH.PASSWORD_REC}

                    >Password Recovery</NavLink>
                <NavLink
                    to={PATH.LOGIN}

                >Login</NavLink>
                <NavLink
                    to={PATH.TEST}

                >Test</NavLink>
            </div>
        </nav>
    );
};

export default Header;