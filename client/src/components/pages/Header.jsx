
import { useEffect, useState } from 'react';
function Header() {
    const [userFullName, setUserFullName] = useState("");
    useEffect(() => { checkUser(); }, []);

    function checkUser(){
    const loggedInUserData = localStorage.getItem("userData");
  
    if (loggedInUserData !== null) {
        alert(JSON.parse(loggedInUserData).userData[0].firstName);
        let firstName = JSON.parse(loggedInUserData).userData[0].firstName;
        let lastName = JSON.parse(loggedInUserData).userData[0].lastName
        setUserFullName(`${firstName} ${lastName}` );
         document.getElementById('logout').style.display='block';
    }else{
        document.getElementById('logout').style.display='none';
    }
}
    function logout(){
        localStorage.clear();
      
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar w/ text</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
            <div className="logout" id="logout">
                Welcome {userFullName}
                <div><a  href="/" onClick={logout}>logout</a></div>
            </div>
        </nav>
    )





}
export default Header;