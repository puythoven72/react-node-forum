import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import SideNavigation from './SideNav';

function Answers(props) {

    let location = useLocation();

    const [answerData, setAnswerData] = useState({});
    const [dataPopulated,setDataPopulated] = useState(false);
    // const [questionObj, setQuestionObj] = useState({});







    useEffect(async function () {
        console.log('running');
        if (location.state) {
            console.log(location.state);
            // let catid = location.state.questionObj.question.category;
            let quesid = location.state.questionObj.questionObj.question.id;

            props.setCurrentQuestion(location.state.questionObj.questionObj);

            

        }
        // else if(props.currentQuestion.length != 0) { 
        //     console.log(JSON.stringify(props.currentQuestion)+' no state' ) ;
        //     await fetch(`getAnswers?catId=${props.currentCategory.id}&quesId=${props.currentQuestion.id}`)
        //     .then(response => response.json())

        //     .then(data => { setAnswerData(data) });
        
        
        // }
        console.log(JSON.stringify(props.currentQuestion.question) + " current qustion")
        await fetch(`getAnswers?catId=${props.currentCategory.id}&quesId=${props.currentQuestion.id}`)
                .then(response => response.json())
                .then(data => { setAnswerData(data) })
        if(answerData){
            setDataPopulated(true);
        }        
    }, [dataPopulated]);



    return (
        <div className='container'>
            <div className='row'>
            <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
            <div className="col">
                <div>Question- {props.currentQuestion.question}</div>
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
                    <NavLink to="/newAnswers" >Add Answer</NavLink>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Answers;




