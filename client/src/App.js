
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


function App() {

  const [currentCategory,setCurrentCategory] = useState({})
  const [currentQuestion,setCurrentQuestion] = useState({})
  const [currentAnswer,setCurrentAnswer] = useState({})


  const [currentCategoryName, setCurrentCategoryName] = useState('');
  // const [allQuestionsByCategory, setAllQuestionByCategory] = useState({});
  const [currentCategoryID, setCurrentCategoryID] = useState('');

  const navigate = useNavigate();




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
            <Route path = "/" element= {<Home currentCategory ={currentCategory} setCurrentCategory={setCurrentCategory} />} />
            <Route path = "/newQuestion" element= {<Question setCurrentCategory={setCurrentCategory} />}/>
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
