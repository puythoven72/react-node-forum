import React, { useCallback } from 'react';
//import './App.css';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import NewAnswer from './pages/NewAnswer';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NewQuestion from './pages/NewQuestion';
import Answers from './pages/Answers';
import Question from './Question';


function Main(props) {
    const [currentCategory, setCurrentCategory] = useState({})
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [currentAnswer, setCurrentAnswer] = useState({})

    const [regLastName, setRegLastName] = useState('');
    const [regFirstName, setRegFirstName] = useState('');

    const [regUserName, setRegUserName] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const loggedInUserData = localStorage.getItem("userData");
    
    alert(loggedInUserData);

    // if (JSON.stringify(props.userData).length === 0) {
    //     console.log("TRUE");
    // }
    // console.log(JSON.stringify(props.userData) + " first");
    // if (Object.keys(props.userData).length === 0 || Object.keys(props.userData.userData).length === 0) {

    //     return (
    //         <>
    //             <Routes>
    //                 <Route path="/" element={<Login setUserData={props.setUserData} userData={props.userData} />} />
    //                 <Route path="/register" element={<Register regPassword={regPassword} setRegPassword={setRegPassword} regUserName={regUserName} setRegUserName={setRegUserName} setRegLastName={setRegLastName} setRegFirstName={setRegFirstName} regFirstName={regFirstName} regLastName={regLastName} />} />
    //                 {/* <Route path="/Login" element={ <Login userName={userName} password = {password}  setUserName = {setUserName} setPassword={setPassword} />} /> */}
    //             </Routes>

    //         </>


    //     )
    // }




    // const handleClick = async (id, name) => {
    //   try {
    //     alert('our in' + name)
    //     // const data = await (await fetch(`getQuestions?id=${id}`)).json()
    //     // setAllQuestionByCategory(data)
    //     // console.log(data);
    //     // console.log(JSON.stringify(allQuestionsByCategory));
    //     setCurrentCategoryName(name);
    //     setCurrentCategoryID(id);
    //     await fetch(`getQuestions?id=${id}`)
    //       .then(response => response.json())
    //       .then(data => { setAllQuestionByCategory(data) })
    //       .then(navigate('/', { replace: true }), [navigate])
    //       .then(myJson => {
    //         console.log(JSON.stringify(myJson));
    //       });



    //   } catch (err) {
    //     console.log(err.message)
    //   }
    // };





    return (



       
      


        <div>

            { 
            loggedInUserData === null ?

                <>
                    <Routes>
                        <Route path="/" element={<Login  />} />
                        <Route path="/register" element={<Register regPassword={regPassword} setRegPassword={setRegPassword} regUserName={regUserName} setRegUserName={setRegUserName} setRegLastName={setRegLastName} setRegFirstName={setRegFirstName} regFirstName={regFirstName} regLastName={regLastName} />} />
                        {/* <Route path="/Login" element={ <Login userName={userName} password = {password}  setUserName = {setUserName} setPassword={setPassword} />} /> */}
                    </Routes>

                </>
                :
                <div className='container-fluid'>
                    <div className='row'>

                        <Routes>
                            {/* <Route path = "/" element= {<Home allQuestionsByCategory={allQuestionsByCategory} setAllQuestionByCategory={setAllQuestionByCategory} handleClick={handleClick} currentCategoryName={currentCategoryName} currentCategoryID={currentCategoryID}currentCategory ={currentCategory} setCurrentCategory={setCurrentCategory} />} /> */}
                            <Route path="/" element={<Home currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} userData={props.userData} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} />} />
                             <Route path="/newQuestion" element={<NewQuestion setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} userData={props.userData} />} /> 
                            <Route path="/answers" element={<Answers setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} setCurrentAnswer={setCurrentAnswer} currentAnswer={currentAnswer} />} />
                            <Route path="/newAnswers" element={<NewAnswer setCurrentCategory={setCurrentCategory} currentQuestion={currentQuestion} />} />
                            

                            {/*
                            
                            <Route path="/question" element={<Question setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion}   />} />
                            <Route path = "/newQuestion" element= {<Question allQuestionsByCategory={allQuestionsByCategory} handleClick={handleClick} currentCategoryName={currentCategoryName} currentCategoryID={currentCategoryID} />} />
                <Route path = "/answers" element= {<Answers/>}/>
                <Route path = "/newAnswers" element= {<NewAnswer/>}/> 
                
              <Route path="/search" element={<Search />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="*" element={<NotFound />} /> */}


                        </Routes>
                    </div>
                </div>

            }






        </div>
    );



}

export default Main;