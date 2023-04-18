import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import Loader from '../components/Loader';

const Login = () => {
  const [loading, setLoading] = useState(false)

  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/")
      setLoading(false)
    
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  };

  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">My Chat</span>
      <span className="title">Login</span>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
        {err && <span className='error'>Something went wrong</span>}
      </form>
      <p>You don't have an account? <Link to="/register">Register</Link></p>
    </div>
    {loading && <Loader />}
  </div>
  )
}

export default Login