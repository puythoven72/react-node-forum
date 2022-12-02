import SideNav from "./SideNav";
import { useEffect, useState } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
//import Questions from "./Questions";
import { BrowserRouter as Router, Routes, Route,Switch  } from 'react-router-dom';

import Question from "../Question"


function Content(props) {

    const [allQuestionsByCategory, setAllQuestionByCategory] = useState({});

    useEffect(async function () {
        await fetch(`getQuestions?id=${props.currentCategory.id}`)
          .then(response => response.json())
          .then(data => { setAllQuestionByCategory(data) })
      }, [props.currentCategory]);

   


    return (


        <div className="col-10">
            Current Category- {props.currentCategory.name}
           

            {
                (Object.keys(allQuestionsByCategory).length === 0) ? (<p>Loading....</p>) :
                    (
                        <div>
                            {/* <ul> */}
                                {allQuestionsByCategory.map(function (question, index) {
                                  
                                        return(<Question questionObj={question} setCurrentQuestion={props.setCurrentQuestion} currentQuestion={props.currentQuestion} />)
                                    //   return <li>  <NavLink to="/answers" state ={ { questionObj:{question}  }}>{questionString}</NavLink></li>

                                })}

                            {/* </ul> */}
                           

                        </div>
                    )

                    

            } 
            {
                props.currentCategory ?
                (
                    <div className="row">
                    <NavLink to="/newQuestion">Add Question</NavLink> 
                    </div>
                ) :
                (null)

            }
         
            
           

        </div>



    )

}
export default Content;