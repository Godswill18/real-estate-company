import React, { useRef, useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');

    const confirmPassword= useRef();
    const username = useRef();
    const email = useRef();
    const password = useRef();
   
  
  const navigate = useNavigate()

  const handleClick = async (e) => {
      e.preventDefault();
      if(confirmPassword.current.value !== password.current.value){
      confirmPassword.current.setCustomValidity(`Passwords don't match`)
      }else{
          const admin = {
              username: username.current.value,
              email: email.current.value,
              password: password.current.value,
          };
          try{
              await axios.post("/register", admin);
              navigate("/login");
          }catch(err){
              console.log(err)
          }
         
      }
  }



//  async function register(ev) {
//     ev.preventDefault();
//    await fetch('http://localhost:8000/auth/register', {
//       method: 'POST',
//       body: JSON.stringify({username, password}),
//       headers: {'Content-Type':'application/json'},
//     })
//   }

  return (
    <div className='reg'>

            <h1>Register</h1>
            <form className='register' onSubmit={handleClick}>
                <input type="text"
                 placeholder='Name'
                //  value={name} onChange={ev => setName(ev.target.value)}
                 />

                <input type="text" 
                 placeholder='Username' 
                 ref={username}
                //  value={username} onChange={ev => setUsername(ev.target.value)}
                
                />

                <input type="email" 
                 placeholder='Email'
                 ref={email}
                //  value={email} onChange={ev => setEmail(ev.target.value)}
                
                />

                <input type="number"
                 placeholder='Phone number'
                 
                //  value={phoneNumber} onChange={ev => setPhoneNumber(ev.target.value)}
                
                />

                <input type="password" 
                placeholder='Password' 
                ref={password}
                // value={password} onChange={ev => setPassword(ev.target.value)}
                
                />
                 <input placeholder='Password again' ref={confirmPassword}  required type='password'/>

                <button>Register</button>
            </form>

        </div>
  )
}
