import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

function Answers(props) {

    let location = useLocation();

    const [answerData, setAnswerData] = useState({});
    const [questionObj, setQuestionObj] = useState({});





    useEffect(function () {
        if (location.state) {

            let catid = location.state.questionObj.question.category;
            let quesid = location.state.questionObj.question.id;
            setQuestionObj(location.state.questionObj.question);

            fetch(`getAnswers?catId=${catid}&quesId=${quesid}`)
                .then(response => response.json())
                .then(data => { setAnswerData(data) })

        } else { console.log('no state') }
    }, []);



    // if(Object.keys(questionObj).length === 0){
    //     console.log(questionObj.length);
    //     questionObj.map(function (xx, index) {
    //        console.log(xx+ " is question"); 
    //      });

    // }
    


    return (
        <div>
            {
                (Object.keys(answerData).length === 0) ? (<p>Loading....</p>) :
                    (
                        <div>
                       
                         
                            <ul>
                                {answerData.map(function (answer, index) {
                                    return <li>  {answer.answer}</li>
                                })}
                            </ul>
                        </div>
                    )

            }
            <div>

                {/* <NavLink to="/newAnswers" state ={ {categoryID:{categoryID},questionID:{questionID},}}>Add Answer</NavLink>  */}

                {/* <NavLink questionObj = {questionObj} className ="navigation-link"
                  to="/newAnswers"
                  
                >
                    Add Answer
                </NavLink> */}

<NavLink questionObj= {questionObj}  className="navigation-link" 
    to={{
         pathname:'/newAnswers',                        
         id: { questionObj:  {questionObj} }
    }} 
    exact
>
    Answer
</NavLink>

               


            </div>
        </div>
    )
}
export default Answers;

