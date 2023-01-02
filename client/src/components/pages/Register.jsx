import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Register(props) {
  const [regMessage, setRegMessage] = useState('');
  const [regMessageId, setRegMessageId] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#cfe2ff"
  }, []);

  useEffect(() => {
    
     clearForm();
     
    }, [regMessage,regMessageId]);



  

  async function registerUser(e) {
    e.preventDefault();
    setRegMessage('');
    setRegMessageId(null);
   await  fetch('/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: props.regFirstName,
        lastName: props.regLastName,
        regusername: props.regUserName,
        regpassword: props.regPassword,
        regpasswordcheck: props.regPasswordCheck,
      }),
    })
      .then((res) => res.json()
        .then(data => { setRegMessage(data.message);setRegMessageId(data.id) })
        )
      .catch((err) => console.log('error ' + err));
   
  }


  function setErrorField(){
    if (regMessageId === 1){
    
     document.getElementById("userNameError").innerHTML = regMessage;

    }
    if (regMessageId === 2){
    
      document.getElementById("passwordError").innerHTML = regMessage;
 
     }
     if (regMessageId === 3){
    
      document.getElementById("firstNameError").innerHTML = regMessage;
 
     }
     if (regMessageId === 4){
    
      document.getElementById("lastNameError").innerHTML = regMessage;
 
     }
  }

  function clearForm() {
    document.getElementById("userNameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";

    if (regMessage.includes('Success')) {
      props.setRegFirstName("");
      props.setRegLastName("");
      props.setRegUserName("");
      props.setRegPassword("");
      props.setRegPasswordCheck("");
    }else{
      setErrorField();
    }
  }

  return (
    <div className="log-container" >
       <div id="main-holder" >
       <h3 id="login-header">Register</h3>
      
      <form onSubmit={registerUser}  id="login-form" method="post">

        <label>
          <p>First Name</p>
          <input type="text" name="firstName" className="login-form-field" value={props.regFirstName} onChange={function (e) { props.setRegFirstName(e.target.value) }} />
          <small> <small><p className = "regError" id='firstNameError'></p></small></small>
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" name="lastName" className="login-form-field" value={props.regLastName} onChange={function (e) { props.setRegLastName(e.target.value) }} />
          <small> <small> <p className = "regError" id='lastNameError'></p></small></small>
        </label>
        <div></div>


        <label>
          <p>Username</p>
          <input type="text" name="regUserName" className="login-form-field" value={props.regUserName} onChange={function (e) { props.setRegUserName(e.target.value) }} />
          <small> <small><p className = "regError" id='userNameError'></p></small> </small>
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="regPassword" className="login-form-field" value={props.regPassword} onChange={function (e) { props.setRegPassword(e.target.value) }} />
         <small> <small><p className = "regError" id='passwordError'></p></small></small>
        </label>
        <label>
          <p>Repeat Password</p>
          <input type="password" name="regPasswordCheck" className="login-form-field" value={props.regPasswordCheck} onChange={function (e) { props.setRegPasswordCheck(e.target.value) }} />
         
        </label>
        <div>
          <button type="submit" id="login-form-submit">Submit</button>
        </div>
      </form>
      <NavLink to="/" >Login</NavLink>

      </div>
    </div>
  )
}

export default Register;
