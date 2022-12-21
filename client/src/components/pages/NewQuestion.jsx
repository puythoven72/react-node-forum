import SideNavigation from "./SideNav";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getLocalUserData } from '../utility.js';


function NewQuestion(props) {
    const [newQuestionData, setNewQuestionData] = useState("");
    const [questionCharCount, setQuestionCharCount] = useState(0);
    const navigate = useNavigate();

    async function getQuestionInputData(e) {
        e.preventDefault()
        let userStoredData = getLocalUserData();
        if (userStoredData !== null && newQuestionData !== '') {
            let userId = userStoredData.id;

            await fetch('/addQuestion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: newQuestionData,
                    categoryID: props.currentCategory.id,
                    userID: userId
                }),
            })
                .then((res) => res.json())
                .then(navigate('/'))
                .catch((err) => console.log(err));
        }
    };

    function handleAddQuestion(e) {
        setNewQuestionData(e.target.value);
        setQuestionCharCount(e.target.value.length);
       console.log(questionCharCount + ' count ');
        
    };

    return (

        <div className="container">
            <div className="row">
                <SideNavigation backEndData={props.backEndData} setBackEndData={props.setBackEndData} currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory} />
                <div className="col g-3 border border-secondary rounded p-1">
                    <div className="row ">
                        <h5 className='text-center'> Category-{props.currentCategory.name}</h5>
                        <form onSubmit={getQuestionInputData} >
                        <small className ="d-flex justify-content-end text-danger"><em>Up to 200 characters</em></small>
                            <div className="form-group mt-3 mb-2">
                                <textarea className="form-control " name="newQuestion" value={newQuestionData} placeholder="Question" aria-label="Question" onChange={handleAddQuestion} rows="2"></textarea>
                            </div>
                            {questionCharCount < 200 ?
                                (<div className='text-end'>
                                    <button type="submit" className="btn btn-secondary ">Add Question</button>
                                </div>) :
                                null

                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default NewQuestion;