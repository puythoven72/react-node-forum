import {formatDate} from "../utility.js";

function Answer(props){

  let answerDte = formatDate(props.answer.created);

return (


    <div className="card">
             <div className="card-header bg-secondary text-white">
                    <div>Answer By: {props.answer.firstname} {props.answer.lastname}</div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.answer.answer}</h5>
                    <p className="card-text">On: {answerDte}</p>
                </div>   
    </div>
)

}
export default Answer