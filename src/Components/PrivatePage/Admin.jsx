import React from 'react';
import useRole from '../Hooks/useRole';
import Loading from '../Loading/Loading';

const Admin = ({ children }) => {
    const [role, isRoleLoading] = useRole()
    if (isRoleLoading) {
        return <Loading></Loading>
    }
  if (!role === 'Admin') {
    return <Navigate to="/login" replace></Navigate>
  }
    return children
}

export default Admin;