
import { useEffect, useState } from 'react';
function Header() {
    const [userFullName, setUserFullName] = useState("");
    useEffect(() => { checkUser(); }, []);

    function checkUser() {
        const loggedInUserData = localStorage.getItem("userData");

        if (loggedInUserData !== null) {
            let firstName = JSON.parse(loggedInUserData).userData[0].firstName;
            let lastName = JSON.parse(loggedInUserData).userData[0].lastName
            setUserFullName(`${firstName} ${lastName}`);
            document.getElementById('logout').style.display = 'block';
        } else {
            document.getElementById('logout').style.display = 'none';
        }
    }
    function logout() {
        localStorage.clear();

    }

    return (<div>


        <nav className="navbar navbar-expand-lg nav-style" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text" id="logout">
                        Welcome {userFullName}
                        <div className='text-end'><a href="/" onClick={logout}>Logout</a></div>
                    </span>
                </div>
            </div>
        </nav>
    </div>

    )





}
export default Header;