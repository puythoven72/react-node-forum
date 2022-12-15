import SideNavigation from "./SideNav";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalUserData } from '../utility.js';

function NewAnswer(props) {
    const [newAnswerData, setNewAnswerData] = useState("");
    const navigate = useNavigate();


   async function postAnswerInputData(e) {
        e.preventDefault();
        let userStoredData = getLocalUserData();
        if (userStoredData !== null && newAnswerData !== '') {
            let userId = userStoredData.id;

        await    fetch('/addAnswer', {
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
                .then(navigate('/answers'))

                .catch((err) => console.log('error'));
        }
    };

    function handleAddAnswer(e) {
        setNewAnswerData(e.target.value);
    };

    return (

        <div className="container-fluid">

            <div className="row">
                <SideNavigation currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory} />
                <div className="col col g-3 border border-secondary rounded p-1">
                    <div className="row">
                        <form onSubmit={postAnswerInputData}>
                            <h5 className='text-center'> Question-{props.currentQuestion.question}</h5>
                            <div className="form-group">
                                
                                <textarea className="form-control" name="newAnswer" value={newAnswerData} placeholder="Answer" aria-label="Answer" onChange={handleAddAnswer} rows="3"></textarea>
                            </div>
                            <div className='text-end'>
                                <button type="submit">Add Answer</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewAnswer;