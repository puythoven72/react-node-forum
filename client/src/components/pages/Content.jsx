import SideNav from "./SideNav";
import { useEffect, useState } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import Question from "./Question";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';




function Content(props) {


    // useEffect(function () {
    //     const fetchData = async function () {
    
    //         await fetch(`getQuestions?id=${props.currentCategoryID}`)
    //         .then(response => response.json())
    //         .then(data => {props.setAllQuestionByCategory(data) })
    //         .then(myJson => {
    //           console.log(JSON.stringify(myJson));
    //         });
            
    //         alert(props.allQuestionsByCategory);
    
    //     }
    //     fetchData();
    
    //   }
    //     , []);
    
    


    // useEffect( async function () {
        
    //     try {
    
    //         alert("IM A RUNNIN")
    //         await fetch(`getQuestions?id=${props.currentCategoryID}`)
    //           .then(response => response.json())
    //           .then(data => {props.setAllQuestionByCategory(data) })
    //           .then(myJson => {
    //             console.log(JSON.stringify(myJson));
    //           });
               
           
            
    //       } catch (err) {
    //         console.log(err.message)
    //       }
    // }, []);








    // const [backEndData, setBackEndData] = useState({});
    // const [newCategoryData, setNewCategoryData] = useState("");

    const [questionId, setQuestionId] = useState('');










    // function checkResponse(allQuestionsByCategory) {
    //     if (allQuestionsByCategory) {
    //         console.log(JSON.stringify(allQuestionsByCategory) + " is data")

    //         // return <div className='App'>ROCK N ROLL </div>;

    //         allQuestionsByCategory.map(function (question, index) {
    //             console.log(question.question);
    //             return

    //             <div>ROCK NEVER DIES</div>

    //         }
    //         );
    //         //return <div className='App'>{data.title}</div>;
    //     } else {

    //         return null;
    //     }
    // };






    // function getCategoryInputData(e) {
    //     e.preventDefault()
    //     fetch('/addCatagories', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             category: newCategoryData,
    //         }),
    //     })
    //         .then((res) => res.json())
    //         // .then((result) => setData(result.rows))
    //         .catch((err) => console.log('error'));
    //     setNewCategoryData('')
    // };


    // function handleAddCategory(e) {
    //     setNewCategoryData(e.target.value)

    // };

    // const getCategoryQuestions = async (id) => {
    //     try {
    //         const data = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)).json()
    //         setData(data)
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }



    //     const getCategoryQuestions = async (id) =>{
    function getCategoryQuestions(id) {
        //         console.log(id + ' id');
        //         await fetch(`getQuestions?id=${id}`)
        //             .then(response => response.json())
        //             .then(data => { setAllQuestionByCategory(data) })
        //             .then(myJson => {
        //                 console.log(JSON.stringify(myJson));
        //             });


    }


    return (

    
        <div className="col-10">
            Current Category- {props.currentCategoryName}

            {
                (Object.keys(props.allQuestionsByCategory).length === 0) ? (<p>Loading....</p>) :
                    (
                        <div>
                            <ul>
                                {props.allQuestionsByCategory.map(function (question, index) {

                                    return <li>{question.question}</li>
                                })}

                            </ul>
                           
                        </div>
                    )

            }
             <div className="row">
                                <NavLink to="/newQuestion">Add Question</NavLink>
                            </div>

        </div>
        
   
    )

}
export default Content;