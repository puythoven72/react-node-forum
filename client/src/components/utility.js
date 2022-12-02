import { useState, useEffect } from "react";

export  function getLocalUserData(){
    let loggedInUserData = localStorage.getItem("userData");
   
    if (loggedInUserData !== null  ) {

        return JSON.parse(loggedInUserData).userData[0];
    }
        return null;

}









    
  
