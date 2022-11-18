import SideNavigation from "./SideNav";
import { useEffect, useState } from 'react';
import { useLocation,NavLink } from 'react-router-dom';


function NewAnswer(props){
  
    const [newAnswerData, setNewAnswerData] = useState("");

    let location =  useLocation();
    let categoryID = null;
    let questionID = null;
    let question = null;


    console.log(props.questionObj);

    if(location.state){
        console.log(location.state.categoryID.categoryID);
        console.log(location.state.questionID.questionID);
        categoryID = location.state.categoryID.categoryID;
        questionID = location.state.questionID.questionID;
        question =  location.state.question.question;
    }

    function getAnswerInputData(e){
        e.preventDefault()
        fetch('/addAnswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: newAnswerData,
                categoryID:categoryID,
                questionID:questionID
            }),
        })
            .then((res) => res.json())
            // .then(navigate('/', {replace: true}), [navigate])
            
            .catch((err) => console.log('error'));
          
      };

    function handleAddAnswer(e) {
        setNewAnswerData(e.target.value);
      };

return(

<div className="container-fluid">
            <div className="row">
                <SideNavigation />
                <div className="col">
                    <form onSubmit={getAnswerInputData}>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">{question}</label>
                            <textarea className="form-control" name="newAnswer" value={newAnswerData} placeholder="Answer" aria-label="Answer" onChange={handleAddAnswer}  rows="3"></textarea>
                        </div>
                        <button type="submit">Add Answer</button>
                    </form>

                </div>

            </div>


        </div>



)


}

export default NewAnswer;