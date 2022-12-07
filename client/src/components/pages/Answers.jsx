import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import SideNavigation from './SideNav';
import Answer from './Answer';

function Answers(props) {

    let location = useLocation();

    const [answerData, setAnswerData] = useState({});
    const [dataPopulated, setDataPopulated] = useState(false);
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
        if (answerData) {
            setDataPopulated(true);
        }
    }, [dataPopulated]);



    return (
        <div className='container'>
            <div className='row ' >
                <SideNavigation currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory} />
                <div className="col g-3 border border-secondary rounded p-1">
                    <h5 className='text-center'> Question-{props.currentQuestion.question}</h5>
                    {
                        (Object.keys(answerData).length === 0) ? (<h4 className='text-center'>No Answers To These Question.</h4>) :
                            (
                                <div >
                                    {/* <ul> */}
                                    {answerData.map(function (answer, index) {
                                        // return <li>  {answer.answer}</li>
                                        return (<Answer answer={answer} />)

                                    })}
                                    {/* </ul>  */}
                                </div>
                            )
                    }
                    <div className="row">
                        <div className='text-end'>
                            <NavLink to="/newAnswers" >Add Answer</NavLink>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Answers;




