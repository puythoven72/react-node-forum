import Register from "./Register";
import { NavLink, Routes, useNavigate, redirect} from 'react-router-dom';
import { useEffect, useState } from 'react';


function Login(props) {
   
    const [tempUserName, setTempUserName] = useState('');
    const [tempPassword,setTempPassword] = useState('');
    const [userTempData,setUserTempData] = useState('');

    const [loginMessage, setloginMessage] = useState('');

    const navigate = useNavigate();

      useEffect(() => {console.log(loginMessage + ' is the message');
    
    } , [loginMessage]);

    function loginUser(e) {
       e.preventDefault();
       setloginMessage('');
        let xxx = null;
        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: tempUserName,
            password: tempPassword
          }),
        })
          .then((res) => res.json())
          .then(data => { console.log(data); if("message" in data){
           alert(" ITS IN ");
            setloginMessage(data.message);
            
          }else{ console.log("you are in  here to"); localStorage.setItem('userData',JSON.stringify( data));window.location.reload(false) } })
          //.then(window.location.reload(false))
          //.catch((err) => console.log('error ' + err));
          
       
      }
    

    return (<div className="log-container">

    
        <div id ="main-holder">
            <h1 id="login-header">Login</h1>
            <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>

            <form onSubmit={loginUser} id="login-form" method="post" >
              <p>{loginMessage}</p>
                <label>
                    <p>Username</p>
                    <input type="text"  value={tempUserName} id="username-field" className="login-form-field" onChange={function (e) { setTempUserName(e.target.value) }} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"  id="password-field" className="login-form-field" value={tempPassword} onChange={function (e) {setTempPassword(e.target.value) }} />
                </label>
                <div>
                    <button type="submit" id="login-form-submit">Submit</button>
                </div>
            </form>




            
            
            <div>
            
            <NavLink to="/register" >Register</NavLink>
           
  
     
            </div>
            




            

        </div>
        </div>
    )
}

export default Login;
