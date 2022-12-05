import { NavLink } from "react-router-dom";
import { formatDate } from "./utility";

function Question(props) {
    //console.log(props);


    let questionString = props.questionObj.question;
    let questionObj = props.questionObj

    let questionDte = formatDate(props.questionObj.created);


    return (
      





            <div class="card">
                <div class="card-header">
                    <div>Asked By: {props.questionObj.firstname} {props.questionObj.lastname}</div>
                </div>
                <div class="card-body">
                    <h5 class="card-title"><NavLink to="/answers" state={{ questionObj: { questionObj } }}>Question:{props.questionObj.question}</NavLink></h5>
                    <p class="card-text">On: {questionDte}</p>
                </div>
            </div>

      
    )

}
export default Question