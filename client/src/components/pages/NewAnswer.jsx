import SideNavigation from "./SideNav";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NewAnswer(props) {
    const [newAnswerData, setNewAnswerData] = useState("");
    const navigate = useNavigate();
 

    function postAnswerInputData(e) {
        e.preventDefault();

        fetch('/addAnswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: newAnswerData,
                categoryID: props.currentQuestion.category,
                questionID: props.currentQuestion.id
            }),
        })
            .then((res) => res.json())
            .then(navigate('/answers' ))

            .catch((err) => console.log('error'));

    };

    function handleAddAnswer(e) {
        setNewAnswerData(e.target.value);
    };

    return (

        <div className="container-fluid">

        <div className="row">
          fff
        <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
                <div className="col">
                    <div className="row">
                        <form onSubmit={postAnswerInputData}>

                            <div className="form-group">
                                <label htmlFor="newAnswer">{props.currentQuestion.question}</label>
                                <textarea className="form-control" name="newAnswer" value={newAnswerData} placeholder="Answer" aria-label="Answer" onChange={handleAddAnswer} rows="3"></textarea>
                            </div>
                            <button type="submit">Add Answer</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewAnswer;