import React, { useContext } from 'react'
import { LoginContext } from '../index'

function Stuff() {
  const context = useContext(LoginContext)

  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4">Here is some of your stuff:</h1>
      {context.loggedIn
        ? <ul className="d-flex">
            <li className="mx-3">Pasta</li>
            <li className="mx-3">Fried rice</li>
            <li className="mx-3">Potatoes</li>
          </ul>
        : <p className="lead">You don't have any stuff because you are not logged in</p>
      }
    </div>
  )
}

export default Stuff
