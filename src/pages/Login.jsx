import React ,{ useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }};
  return (
    <div>
     <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Real ChatApp</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit} >
                 <input type="email" placeholder='Email'/>
                 <input type="password" placeholder='Password' />
                 <button>Sign in</button>
                 {err && <span>Something went wrong</span>}
            </form>
            <Link to="/register">
            <p> You don't have an Account? Register</p></Link>
        </div>
     </div>
    </div>
  )
}

export default Login
