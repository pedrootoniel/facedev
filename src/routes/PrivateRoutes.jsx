import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Profile from '../pages/Profile'
import Feed from '../pages/Feed'
import ListUsers from '../pages/ListUsers'

function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Feed} />
        <Route path='/users' component={ListUsers} />
        <Route path='/profile/:userId' component={(props) => {
          return <Profile {...props} /> || <Redirect to='/' />
        }} />
      </Switch>
    </BrowserRouter>
  )
}

export default PrivateRoutes