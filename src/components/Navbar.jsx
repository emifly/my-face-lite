import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">MyFace Lite</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/pals">MyPals</Link></li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/stuff">MyStuff</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar