import React, { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from '../../../apiCalls';
import { AuthContext } from '../../../context/AuthContext';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
        username: username.current.value
      },
      dispatch
    );
  };

  console.log(user)
  return (
    <div className='log'>
      <h1>Login</h1>
      <form className='login' onSubmit={handleClick}>
        <input type='text' placeholder='username' ref={username} />
        <input type='email' placeholder='Email' ref={email} />
        <input type='password' placeholder='Password' minLength='5' ref={password} />
        <button disabled={isFetching}>{isFetching ? 'Loading' : 'Login'}</button>
      </form>
    </div>
  );
}
