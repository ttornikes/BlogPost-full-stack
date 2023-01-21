import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='auth'>
      <h1>LOGIN</h1>
      <form >
        <input required type="text" placeholder='username...' />
        <input required type="text" placeholder='password...' />
        <button>LogIn</button>
        <p className='error'> you have some mistake!</p>
        <span> Don't you have an account? <Link className='Links' to="/register">Registration</Link></span>
        
      </form>
      
    </div>
  )
}

export default Login