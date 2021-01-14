import React from "react";
import {Route, Switch} from 'react-router-dom';

import EntNewPassword from "../pages/EntNewPassword/EntNewPassword";
import Error404 from "../pages/Error404/Error404";
import Login from "../pages/Login/Login";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery";
import Profile from "../pages/Prrofile/Profile";
import Registration from "../pages/Registration/Registration";
import Test from "../pages/Test/Test";


export const PATH = {
    ENT_NEW_PASSWORD: "/new_password",
    LOGIN: '/login',
    PASSWORD_REC: '/pass_rec',
    PROFILE: '/profile',
    REGISTRATION: '/registration',
    TEST: '/test'
}

const Routes = () => {
    return (
        <main>
            <Switch>
                <Route path={'/'} exact render={() => <h1>Hello</h1>}/>
                <Route path={PATH.ENT_NEW_PASSWORD}  render={() => <EntNewPassword/>}/>
                <Route path={PATH.LOGIN}  render={() => <Login/>}/>
                <Route path={PATH.PASSWORD_REC}  render={() => <PasswordRecovery/>}/>
                <Route path={PATH.PROFILE}  render={() => <Profile/>}/>
                <Route path={PATH.REGISTRATION}  render={() => <Registration/>}/>
                <Route path={PATH.TEST}  render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>
             </Switch>
        </main>
    )
}

export  default Routes