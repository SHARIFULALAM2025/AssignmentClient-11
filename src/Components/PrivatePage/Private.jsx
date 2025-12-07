import React from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../Authentication/Auth/AuthContext/AuthContext';
import { useContext } from 'react';

const Private = ({ children }) => {

    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/login" replace></Navigate>
    }


    return children
};

export default Private