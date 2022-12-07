import { NavLink } from "react-router-dom";
import { formatDate } from "./utility";

function Question(props) {
    //console.log(props);


    let questionString = props.questionObj.question;
    let questionObj = props.questionObj

    let questionDte = formatDate(props.questionObj.created);


    return (
      





            <div className="card">
                <div className="card-header bg-secondary text-white">
                    <div>Asked By: {props.questionObj.firstname} {props.questionObj.lastname}</div>
                </div>
                <div className="card-body " >
                    <h5 className="card-title info-link"><NavLink  to="/answers" state={{ questionObj: { questionObj } }}>Question: {props.questionObj.question}</NavLink></h5>
                    <p className="card-text small">On: {questionDte}</p>
                </div>
            </div>

      
    )

}
export default Question