import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to=""><img src={Logo} alt="" /></Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Art</h6>
          </Link>
          <Link className="link" to="/?cat=sience">
            <h6>Sience</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Food</h6>
          </Link>
          <span>Tornike</span>
          <span>Log out</span>
          <span className="write">
            <Link className='link' to="/write">write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar