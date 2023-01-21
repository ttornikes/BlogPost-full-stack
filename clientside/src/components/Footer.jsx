import React from 'react'
import Logo from '../img/logo.svg'
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made with ❤️ and by <b>React.js</b>.
      </span>
    </footer>
  )
}

export default Footer