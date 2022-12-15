import SideNavigation from "./SideNav";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {getLocalUserData} from '../utility.js';


function NewQuestion(props) {
    const [newQuestionData, setNewQuestionData] = useState("");
    const navigate = useNavigate();

 async   function getQuestionInputData(e) {
        e.preventDefault()
        let userStoredData = getLocalUserData();
        if (userStoredData !== null  && newQuestionData !=='' ) {
           let userId = userStoredData.id;

      await  fetch('/addQuestion', {
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
            .catch((err) => console.log('error'));
    }
    };

    function handleAddQuestion(e) {
        setNewQuestionData(e.target.value);
    };

    return (

        <div className="container-fluid">
            <div className="row">     
            <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
                <div className="col g-3 border border-secondary rounded p-1">
                    <div className="row ">
                    <h5 className='text-center'> Category-{props.currentCategory.name}</h5>
                         <form onSubmit={getQuestionInputData}>
                            <div className="form-group mt-3 mb-2">
                                <textarea className="form-control" name="newQuestion" value={newQuestionData} placeholder="Question" aria-label="Question" onChange={handleAddQuestion} rows="3"></textarea>
                            </div>
                            <div className='text-end'>
                            <button type="submit"  className="btn btn-secondary ">Add Question</button>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>

    )

}
export default NewQuestion;