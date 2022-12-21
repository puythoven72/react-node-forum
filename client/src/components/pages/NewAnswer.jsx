import SideNavigation from "./SideNav";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalUserData } from '../utility.js';

function NewAnswer(props) {
    const [newAnswerData, setNewAnswerData] = useState("");
    const navigate = useNavigate();
    const [answerCharCount, setAnswerCharCount] = useState(0);

    async function postAnswerInputData(e) {
        e.preventDefault();
        let userStoredData = getLocalUserData();
        if (userStoredData !== null && newAnswerData !== '') {
            let userId = userStoredData.id;

            await fetch('/addAnswer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    answer: newAnswerData,
                    categoryID: props.currentQuestion.category,
                    questionID: props.currentQuestion.id,
                    userID: userId
                }),
            })
                .then((res) => res.json())
                .then(navigate('/answers')).then(setAnswerCharCount(0))

                .catch((err) => console.log(err));
        }
    };

    function handleAddAnswer(e) {
        setAnswerCharCount(e.target.value.length);
        setNewAnswerData(e.target.value);

    };

    return (

        <div className="container-fluid">

            <div className="row">
                <SideNavigation backEndData={props.backEndData} setBackEndData={props.setBackEndData} currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory} />
                <div className="col col g-3 border border-secondary rounded p-1">
                    <div className="row">
                        <form onSubmit={postAnswerInputData}>
                            <h5 className='text-center'> Question-{props.currentQuestion.question}</h5>

                            <div className="form-group mb-3">
                                <small className ="d-flex justify-content-end text-danger"><em>Up to 200 characters</em></small>
                                <textarea className="form-control" name="newAnswer" value={newAnswerData} placeholder="Answer" aria-label="Answer" onChange={handleAddAnswer} rows="2"></textarea>
                            </div>
                            {answerCharCount < 200 ?
                                (
                                    <div className='text-end'>
                                        <button type="submit" id="submit">Add Answer</button>
                                    </div>) :
                                (null)

                            }
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewAnswer;