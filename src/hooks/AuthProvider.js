import React, { useContext, createContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import LoadingLandingPage from '../components/Shimmer/LoadingLandingPage'

const AuthContext = createContext()

function AuthProvider({ children }) {

  const [authUser, setAuthUser] = useState({ authenticated: false })
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('@facedev_token')
    if (!token) return setLoading(false)

    axios.get('/sessions', { headers: { Authorization: `Bearer ${token}` } }).then(({ data }) => {
      if (data.success) {
        setAuthUser({ authenticated: true, token })
        const user = localStorage.getItem('@facedev_user')
        console.log(user)
        setUserData(JSON.parse(user))
      }
      setLoading(false)
    })
  }, [])

  const signIn = useCallback(async (token, user) => {
    setAuthUser({
      authenticated: true,
      token
    })
    localStorage.setItem('@facedev_token', token)

    setUserData(user)
    localStorage.setItem('@facedev_user', JSON.stringify(user))
  }, [])

  const updateUser = useCallback(async (user) => {
    setUserData(user)
    localStorage.setItem('@facedev_user', JSON.stringify(user))
  }, [])

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, signIn, userData, setUserData, updateUser }}>
      {
        loading &&
        <LoadingLandingPage />
      }
      {
        !loading &&
        children
      }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider.')
  return context
}

export default AuthProvider