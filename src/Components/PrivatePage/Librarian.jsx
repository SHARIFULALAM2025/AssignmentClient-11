import React from 'react';
import useRole from '../Hooks/useRole';

const Librarian = ({ children }) => {
  const [role, isRoleLoading] = useRole()
  if (isRoleLoading) {
    return <Loading></Loading>
  }
  if (!role === 'Librarian') {
    return <Navigate to="/login" replace></Navigate>
  }
  return children
}

export default Librarian;