import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Register(props) {
  const [regMessage, setRegMessage] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = "#cfe2ff"
  }, []);

  useEffect(() => { clearForm() }, [regMessage]);

  function registerUser(e) {
    e.preventDefault();
    setRegMessage('');
    fetch('/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: props.regFirstName,
        lastName: props.regLastName,
        regusername: props.regUserName,
        regpassword: props.regPassword
      }),
    })
      .then((res) => res.json()
        .then(data => { setRegMessage(data.message) })
      )
      .catch((err) => console.log('error ' + err));
   
  }

  function clearForm() {
    if (regMessage.includes('Success')) {
      props.setRegFirstName("");
      props.setRegLastName("");
      props.setRegUserName("");
      props.setRegPassword("");
    }
  }

  return (
    <div className="log-container" >
       <div id="main-holder" >
       <h3 id="login-header">Register</h3>
       <div >
        {regMessage}
      </div>
      <form onSubmit={registerUser}  id="login-form" method="post">

        <label>
          <p>First Name</p>
          <input type="text" name="firstName" className="login-form-field" value={props.regFirstName} onChange={function (e) { props.setRegFirstName(e.target.value) }} />
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" name="lastName" className="login-form-field" value={props.regLastName} onChange={function (e) { props.setRegLastName(e.target.value) }} />
        </label>
        <div></div>


        <label>
          <p>Username</p>
          <input type="text" name="regUserName" className="login-form-field" value={props.regUserName} onChange={function (e) { props.setRegUserName(e.target.value) }} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="regPassword" className="login-form-field" value={props.regPassword} onChange={function (e) { props.setRegPassword(e.target.value) }} />
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
