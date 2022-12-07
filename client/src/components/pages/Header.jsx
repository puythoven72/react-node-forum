
import { useEffect, useState } from 'react';
function Header() {
    const [userFullName, setUserFullName] = useState("");
    useEffect(() => { checkUser(); }, []);

    function checkUser() {
        const loggedInUserData = localStorage.getItem("userData");

        if (loggedInUserData !== null) {
            alert(JSON.parse(loggedInUserData).userData[0].firstName);
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
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span class="navbar-text" id="logout">
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