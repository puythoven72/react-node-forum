
import React, { useCallback } from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import SiteRoutes from './SiteRoutes';
import SideNavigation from './components/pages/SideNav';
import Content from './components/pages/Content';
import Question from './components/pages/Questions';
import Answers from './components/pages/Answers';
import NewAnswer from './components/pages/NewAnswer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {

  const [currentCategory,setCurrentCategory] = useState({})
  const [currentQuestion,setCurrentQuestion] = useState({})
  const [currentAnswer,setCurrentAnswer] = useState({})


  const [currentCategoryName, setCurrentCategoryName] = useState('');
  // const [allQuestionsByCategory, setAllQuestionByCategory] = useState({});
  const [currentCategoryID, setCurrentCategoryID] = useState('');

  const navigate = useNavigate();


  // const [userName, setUserName] = useState('');
  // const [password,setPassword] = useState('');

   const [userData,setUserData] = useState({});
  const [regUserName, setRegUserName] = useState('');
  const [regPassword,setRegPassword] = useState('');

  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName,setRegLastName] = useState('');


  
  if(JSON.stringify(userData).length ==0) {
    console.log("TRUE");
  }
    console.log(JSON.stringify(userData)+ " first") ;
    if(Object.keys(userData).length === 0 || Object.keys(userData.userData).length === 0  ) {

    return(
      <>
      <Routes>
      <Route path="/" element={ <Login setUserData = {setUserData} userData={userData} />} />
        <Route path="/register" element={<Register regPassword={regPassword} setRegPassword={setRegPassword} regUserName={regUserName} setRegUserName={setRegUserName} setRegLastName={setRegLastName} setRegFirstName={setRegFirstName} regFirstName={regFirstName} regLastName={regLastName}/>} />
        {/* <Route path="/Login" element={ <Login userName={userName} password = {password}  setUserName = {setUserName} setPassword={setPassword} />} /> */}
      </Routes> 
   
    </>
    

    )
  }




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
      <div className='container-fluid'>
        <div className='row'>

          <Routes> 
            {/* <Route path = "/" element= {<Home allQuestionsByCategory={allQuestionsByCategory} setAllQuestionByCategory={setAllQuestionByCategory} handleClick={handleClick} currentCategoryName={currentCategoryName} currentCategoryID={currentCategoryID}currentCategory ={currentCategory} setCurrentCategory={setCurrentCategory} />} /> */}
            <Route path = "/" element= {<Home currentCategory ={currentCategory} setCurrentCategory={setCurrentCategory} userData={userData} />} />
            <Route path = "/newQuestion" element= {<Question setCurrentCategory={setCurrentCategory}  currentCategory ={currentCategory} userData={userData}/>}/>
            <Route path = "/answers" element= {<Answers setCurrentCategory={setCurrentCategory} currentCategory ={currentCategory} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} setCurrentAnswer={setCurrentAnswer} currentAnswer={currentAnswer} />}/>
            <Route path = "/newAnswers" element= {<NewAnswer setCurrentCategory={setCurrentCategory} currentQuestion={currentQuestion}/>}/> 
            
            {/* <Route path = "/newQuestion" element= {<Question allQuestionsByCategory={allQuestionsByCategory} handleClick={handleClick} currentCategoryName={currentCategoryName} currentCategoryID={currentCategoryID} />} />
            <Route path = "/answers" element= {<Answers/>}/>
            <Route path = "/newAnswers" element= {<NewAnswer/>}/> 
            
          <Route path="/search" element={<Search />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} /> */}


          </Routes>
        </div>
      </div>


    </div>
  );
}

export default App;
