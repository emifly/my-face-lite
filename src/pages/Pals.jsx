import React, { useContext } from 'react'
import { LoginContext } from '../index'

function Pals() {
  const context = useContext(LoginContext)

  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4">Here are some of your pals:</h1>
      {context.loggedIn
        ? <ul className="d-flex">
            <li className="mx-3">The other {context.username}</li>
            <li className="mx-3">Jack</li>
            <li className="mx-3">Tim</li>
          </ul>
        : <p className="lead">You don't have any pals because you are not logged in</p>
      }
    </div>
  )
}

export default Pals