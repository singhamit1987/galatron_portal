import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { checkLoginToken } from '../../helpers/login'
import { getToken } from '../../helpers/account'

const token = getToken()

export const MainGuard = ({ component: Component, auth, ...rest }) => (
    
    <Route {...rest} render={(props) => {
        if (!(token == null)) {
            return (
                <Redirect to='/account' />
            )
        } else {
            return (                
                <Component {...props} />
            )
        }
    }} />
    
)

