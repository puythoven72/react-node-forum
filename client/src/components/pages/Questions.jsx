import SideNavigation from "./SideNav";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Question(props) {
    const [newQuestionData, setNewQuestionData] = useState("");
    const [questionAnswers, setQuestionAnswers] = useState({});
    const navigate = useNavigate();

    function getQuestionInputData(e) {
        e.preventDefault()
        fetch('/addQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: newQuestionData,
                categoryID: props.currentCategory.id,
            }),
        })
            .then((res) => res.json())
             .then(navigate('/', {replace: true}), [navigate])
           // .then(props.handleClick(props.currentCategoryID, props.currentCategoryName))
            .catch((err) => console.log('error'));

    };

    function handleAddQuestion(e) {
        setNewQuestionData(e.target.value);
    };

    return (

        <div className="container-fluid">

            <div className="row">
              
            <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
            
                <div className="col">
                  
                    <div className="row">
                        <form onSubmit={getQuestionInputData}>

                            <div className="form-group">
                                <label htmlFor="newQuestion">{props.currentCategory.name}</label>
                                <textarea className="form-control" name="newQuestion" value={newQuestionData} placeholder="Question" aria-label="Question" onChange={handleAddQuestion} rows="3"></textarea>
                            </div>
                            <button type="submit">Add Question</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Question;