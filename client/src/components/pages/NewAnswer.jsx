import SideNavigation from "./SideNav";
import { useEffect, useState } from 'react';
import { useLocation,NavLink,useNavigate } from 'react-router-dom';


function NewAnswer(props){
  
    const [newAnswerData, setNewAnswerData] = useState("");
    const navigate = useNavigate();
    let location =  useLocation();
    let categoryID = null;
    let questionID = null;
    let question = null;
    let questionObj = null;

    console.log(location.state.questionObj);

    useEffect(function () {
        if(location.state){
            //     console.log(location.state.categoryID.categoryID);
            //     console.log(location.state.questionID.questionID);
                 categoryID = location.state.questionObj.category;         ;
                 questionID = location.state.questionObj.id;
                question =  location.state.questionObj.question;
                question = location.state.questionObj;
             }
        });
   

    function postAnswerInputData(e){
        e.preventDefault();

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
             .then(navigate('/answers', { state: { currentCategoryID: {categoryID},questionObj:{question} } }))  
            
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
                    <form onSubmit={postAnswerInputData}>

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