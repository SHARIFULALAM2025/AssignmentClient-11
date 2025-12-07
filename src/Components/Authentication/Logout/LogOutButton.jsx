import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext/AuthContext';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';

const LogOutButton = () => {
  const { LogOut } = useContext(AuthContext)
  const handelLogout = () => {
    LogOut()
      .then(() => {
        toast.success("Log out Successfully!")
      })
      .catch(error => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage)

    })
  }

  return (
    <Button
      onClick={handelLogout}
      startIcon={<LogoutIcon></LogoutIcon>}
      variant="contained"
    >
      Log Out
    </Button>
  )
}

export default LogOutButton;