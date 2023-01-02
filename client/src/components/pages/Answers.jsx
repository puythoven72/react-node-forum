import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import SideNavigation from './SideNav';
import Answer from './Answer';

function Answers(props) {

    let location = useLocation();

    const [answerData, setAnswerData] = useState({});
    const [dataPopulated, setDataPopulated] = useState(false);

  


    useEffect(() => {
        async function fetchData() {
           
            if (location.state) {
                props.setCurrentQuestion(location.state.questionObj.questionObj);
                location.state = null;
            }

            await fetch(`getAnswers?catId=${props.currentCategory.id}&quesId=${props.currentQuestion.id}`)
                .then(response => response.json())
                .then(data => { setAnswerData(data) }).catch((err) => console.log(err));
            if (answerData) {
                setDataPopulated(true);
            }
        }
        fetchData();
    }, [dataPopulated]);



    return (
        <div className='container'>
            <div className='row ' >
                <SideNavigation backEndData={props.backEndData} setBackEndData={props.setBackEndData} currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory} />
                <div className="col-9  g-3 border border-secondary rounded p-1">
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




