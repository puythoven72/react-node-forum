import Header from './Header';
import Content from './Content';
import SideNavigation from  './SideNav';

import { useEffect, useState } from 'react';

 function Home(props) {
//     function addCategory(){
//         fetch("/addCatagories")
//         .then(response => response.json())
        

//     }





   
    return (
       
        <div className="container-fluid">
        <div className="row">
          
           <SideNavigation handleClick = {props.handleClick} /> 
         
           
           <Content currentCategoryName={props.currentCategoryName} currentCategoryID = {props.currentCategoryID} allQuestionsByCategory = {props.allQuestionsByCategory} setAllQuestionByCategory={props.setAllQuestionByCategory}/>
           
        </div>

        </div>
        
    )


}

export default Home;