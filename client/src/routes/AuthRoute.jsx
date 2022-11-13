import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({ children }) => {
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth)

    if (!isAuthenticated) return <Navigate to="/" />
    return children;
}

export default AuthRoute
