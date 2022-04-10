import React,  {Fragment} from 'react'
import PrivateRoutes from './PrivateRoutes'
import { useAuth } from '../hooks/AuthProvider'
import LandingPage from '../pages/LandingPage'

function Routes() {
  const { authUser } = useAuth()

  return (
    <Fragment>
      {
        authUser.authenticated &&
        <PrivateRoutes />
      }
      {
        !authUser.authenticated &&
        <LandingPage />
      }
    </Fragment>
  )
}

export default Routes