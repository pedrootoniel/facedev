import React from 'react'
import './services/api'
import './config'
import Routes from './routes'
import Global from './global'
import AuthProvider from './hooks/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Global />
        <Routes />
      </div>
    </AuthProvider>
  )
}

export default App
