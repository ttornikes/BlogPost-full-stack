import React from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className='auth'>
      <h1>REGISTRATION</h1>
      <form >
        <input required type="text" placeholder='username...' />
        <input required type="email" placeholder='email...' />
        <input required type="text" placeholder='password...' />
        <button>Sign Up</button>
        <p className='error'> This is incorect!</p>
        <span> Do you have an account? <Link className='Links' to="/login">LogIn</Link></span>
        
      </form>
      
    </div>
  )
}

export default Register