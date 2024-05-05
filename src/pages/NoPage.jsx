import React ,{ useState } from 'react'
import {FaRegCircleQuestion} from 'react-icons/fa6'
import { Link} from 'react-router-dom';
import err from '../assets/error-500.png'
const NoPage = () => {
  
  return (
    <div>
     <div className="formContainer">
        <div className="formWrapper">
            {/* <span className="logo">Real ChatApp</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit} >
                 <input type="email" placeholder='Email'/>
                 <input type="password" placeholder='Password' />
                 <button>Sign in</button>
                 {err && <span>Something went wrong</span>}
            </form>
            <Link to="/register">
            <p> You don't have an Account? Register</p></Link> */}
            <img src={err} alt="Image of Error-500" />
             <h1 > <FaRegCircleQuestion/> Oops! Something went wrong</h1>
            <h3>We're sorry. The Web address you entered is not a functioning page on our site.</h3>
            <h2>Go to Let's_Connect <Link to="/">Home</Link> Page</h2>
        </div>
     </div>
    </div>
  )
}

export default NoPage
