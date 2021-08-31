import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="transparent z-depth-0">
      <div className="nav-wrapper">
        {/* <Link to="/" className="brand-logo">Fitso</Link> */}
        <ul className="right">
          <li><Link to="/badminton">Membership</Link></li>
          <li><Link to="/badminton">GetApp</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header