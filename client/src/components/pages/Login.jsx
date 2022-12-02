import Register from "./Register";
import { NavLink, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Login(props) {
    const [loginMessage, setloginMessage] = useState('');
    const [tempUserName, setTempUserName] = useState('');
    const [tempPassword,setTempPassword] = useState('');


    function loginUser(e) {
        //e.preventDefault();
        setloginMessage('');
        fetch('/loginUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: tempUserName,
            password: tempPassword
          }),
        })
          .then((res) => res.json()
          .then(data => {  localStorage.setItem('userData',JSON.stringify( data)) })
          )
          .catch((err) => console.log('error ' + err));
       
      }
    

    return (
        <div>
            
            <form onSubmit={loginUser}  >
                <label>
                    <p>Username</p>
                    <input type="text"  value={tempUserName}  onChange={function (e) { setTempUserName(e.target.value) }} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={tempPassword} onChange={function (e) {setTempPassword(e.target.value) }} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            
            <div>
            
            <NavLink to="/register" >Register</NavLink>
           
  
     
            </div>
            
        </div>
    )
}

export default Login;
