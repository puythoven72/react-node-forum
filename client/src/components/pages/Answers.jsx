import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import SideNavigation from './SideNav';
import Answer from './Answer';

function Answers(props) {

    let location = useLocation();

    const [answerData, setAnswerData] = useState({});
    const [dataPopulated, setDataPopulated] = useState(false);



    // useEffect(async function () {
    //     console.log(JSON.stringify(props));
    //     console.log( "question is " +JSON.stringify(props.currentQuestion));
    //     if (location.state) {
    //         props.setCurrentQuestion(location.state.questionObj.questionObj);
    //     }

    //     await fetch(`getAnswers?catId=${props.currentCategory.id}&quesId=${props.currentQuestion.id}`)
    //         .then(response => response.json())
    //         .then(data => { setAnswerData(data) })
    //     // if (answerData) {
    //     //     setDataPopulated(true);
    //     // }
    // }, []);


    useEffect(() => {
        async function fetchData() {
            console.log(JSON.stringify(props));
        console.log( "question is " +JSON.stringify(props.currentQuestion));
        if (location.state) {
            props.setCurrentQuestion(location.state.questionObj.questionObj);
        }

        await fetch(`getAnswers?catId=${props.currentCategory.id}&quesId=${props.currentQuestion.id}`)
            .then(response => response.json())
            .then(data => { setAnswerData(data) }).catch((err) => console.log(err));
        // if (answerData) {
        //     setDataPopulated(true);
        // }
        }
        fetchData();
      }, []);



    return (
        <div className='container'>
            <div className='row ' >
                <SideNavigation currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory} />
                <div className="col g-3 border border-secondary rounded p-1">
                    <h5 className='text-center'> Question-{props.currentQuestion.question}</h5>
                    {
                        (Object.keys(answerData).length === 0) ? (
                            <h4 className='text-center'>No Answers To These Question.</h4>) :
                            (
                                <div >
                                    {answerData.map(function (answer, index) {
                                        return (
                                            <div key={answer.id}>
                                                <Answer answer={answer} />
                                            </div>
                                        )
                                    })}
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




