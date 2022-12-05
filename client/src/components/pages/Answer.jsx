import {formatDate} from "../utility.js";

function Answer(props){

  let answerDte = formatDate(props.answer.created);




return (


    


    <div class="card">
             <div class="card-header">
                    <div>Answer By: {props.answer.firstname} {props.answer.lastname}</div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.answer.answer}</h5>
                    <p class="card-text">On: {answerDte}</p>
                </div>   
    </div>


)

}
export default Answer