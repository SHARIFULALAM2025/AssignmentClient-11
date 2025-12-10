import React, { useEffect } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../../Firebase/Firebase.init'
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  /* set theme hole project */
  const [theme, setTheme] = useState('light')
  /* set user */
  const [user, setUser] = useState(null)
  // console.log(user);

  /* set loading */
  const [loading, setLoading] = useState(true)
  /*create user means  register/signup   */
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  /* signin/login user */
  const loginInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  /* logout user */
  const LogOut = () => {
    return signOut(auth)
  }
  /* google login user */
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  /* set user */
  const updateUserImageProfile = (name, myImage) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: myImage,
    })
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])
  /* auth info access any where in the project */
  const AuthInfo = {
    theme,
    setTheme,
    createUser,
    loginInUser,
    loading,
    setLoading,
    user,
    LogOut,
    googleLogin,
    updateUserImageProfile,
    setUser,
  }
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
