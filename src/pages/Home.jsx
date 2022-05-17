import React, { useContext } from 'react'
import { LoginContext } from '../index'

function Home() {
  const context = useContext(LoginContext)

  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4">Welcome</h1>
      <p className="lead">{context.loggedIn ? `How is your face today, ${context.username}?` : 'You are not logged in'}</p>
    </div>
  )
}

export default Home
