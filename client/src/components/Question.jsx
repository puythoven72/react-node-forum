import { Outlet, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

function Question(props){
//console.log(props);


let questionString = props.questionObj.question;
let questionObj =props.questionObj




return (
<div>

   

    <div>Asked By: {props.questionObj.firstname} {props.questionObj.lastname}</div>
    <div><NavLink to="/answers" state ={ { questionObj:{questionObj}  }}>Question:{props.questionObj.question}</NavLink></div>

</div>
)

}
export default Question