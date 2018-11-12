import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
const Header = ({ siteTitle }) => (
  <div className="header">
    <div>
      <Link to="/">
        <img src={Logo} />
      </Link>
    </div>
  </div>
)

export default Header
