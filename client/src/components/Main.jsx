
//import './App.css';
import {  useState } from 'react';

import Home from './pages/Home';
import NewAnswer from './pages/NewAnswer';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewQuestion from './pages/NewQuestion';
import Answers from './pages/Answers';



function Main(props) {
    const [currentCategory, setCurrentCategory] = useState({})
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [currentAnswer, setCurrentAnswer] = useState({})
    const [regLastName, setRegLastName] = useState('');
    const [regFirstName, setRegFirstName] = useState('');
    const [regUserName, setRegUserName] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const loggedInUserData = localStorage.getItem("userData");
    
  
    return (

        <div>

            { 
            loggedInUserData === null ?

                <>
                    <Routes>
                        <Route path="/" element={<Login  />} />
                        <Route path="/register" element={<Register regPassword={regPassword} setRegPassword={setRegPassword} regUserName={regUserName} setRegUserName={setRegUserName} setRegLastName={setRegLastName} setRegFirstName={setRegFirstName} regFirstName={regFirstName} regLastName={regLastName} />} />
                    </Routes>

                </>
                :
                <div className='container-fluid'>
                    <div className='row'>

                        <Routes>
                           
                            <Route path="/" element={<Home currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} userData={props.userData} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} />} />
                            <Route path="/newQuestion" element={<NewQuestion setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} userData={props.userData} />} /> 
                            <Route path="/answers" element={<Answers setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} setCurrentAnswer={setCurrentAnswer} currentAnswer={currentAnswer} />} />
                            <Route path="/newAnswers" element={<NewAnswer setCurrentCategory={setCurrentCategory} currentQuestion={currentQuestion} />} />
                        </Routes>
                    </div>
                </div>

            }
        </div>
    );
}

export default Main;