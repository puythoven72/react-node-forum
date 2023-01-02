
import { useEffect, useState } from 'react';
import dogCat from "../../images/dogCat.png"
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
            <div>
             <img src={dogCat} alt="Cartoon Dog And Cat" />
        </div>
                <a className="navbar-brand header-title" href="/">Pet Forum</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
                
                    <span className="navbar-text " id="logout">
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