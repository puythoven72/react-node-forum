
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Question from "../Question"


function Content(props) {

    const [allQuestionsByCategory, setAllQuestionByCategory] = useState({});

    useEffect(async function () {
        alert(props.currentCategory.id);
        await fetch(`getQuestions?id=${props.currentCategory.id}`)
            .then(response => response.json())
            .then(data => { setAllQuestionByCategory(data) }).catch((err) => console.log(err));
            
    }, [props.currentCategory]);

    // useEffect(async function () {
    //     await fetch(`getQuestions?id=${props.currentCategory.id}`)
    //         .then(response => response.json())
    //         .then(data => { setAllQuestionByCategory(data) })
    // }, []);

    return (


        <div className="col-10 g-3 border border-secondary rounded p-1">

            {
                (Object.keys(allQuestionsByCategory).length === 0) ? (<h4 className='text-center'>Select A Category, And Add A Question</h4>) :
                    (
                        <div>
                            <h5 className='text-center'> Current Category-{props.currentCategory.name}</h5>
                            {/* <ul> */}
                            {allQuestionsByCategory.map(function (question, index) {

                                return (

                                    <div key={question.id} >
                                        <Question questionObj={question} setCurrentQuestion={props.setCurrentQuestion} currentQuestion={props.currentQuestion} />
                                    </div>
                                )



                                //   return <li>  <NavLink to="/answers" state ={ { questionObj:{question}  }}>{questionString}</NavLink></li>

                            })}

                            {/* </ul> */}

                        </div>
                    )

            }
            {
                Object.keys(props.currentCategory).length > 0 ?
                    (
                        <div className="row ">
                            <div className='text-end'>
                                <NavLink to="/newQuestion">Add Question</NavLink>
                            </div>
                        </div>
                    ) :
                    (null)

            }







        </div>



    )

}
export default Content;