import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import SideNavigation from './SideNav';

function Answers(props) {

    let location = useLocation();

    const [answerData, setAnswerData] = useState({});
    // const [questionObj, setQuestionObj] = useState({});







    useEffect(async function () {
        console.log('running');
        if (location.state) {
            console.log(location.state);
            // let catid = location.state.questionObj.question.category;
            let quesid = location.state.questionObj.question.id;

            props.setCurrentQuestion(location.state.questionObj.question);

            await fetch(`getAnswers?catId=${props.currentCategory.id}&quesId=${quesid}`)
                .then(response => response.json())

                .then(data => { setAnswerData(data) });

        }
        else { console.log('no state') }
    }, []);



    return (
        <div className='container'>
            <div className='row'>
            <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
            <div className="col">
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




