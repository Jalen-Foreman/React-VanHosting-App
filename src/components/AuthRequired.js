import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Login from './Login'

const AuthRequired = () => {
  const authenticated = false
  if (authenticated) {
    return <Outlet />
  } else {
    return <Navigate to='login' state={{message: 'You must login first!'}}/>
  }
}

export default AuthRequired