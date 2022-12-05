import { useState, useEffect } from "react";

export  function getLocalUserData(){
    let loggedInUserData = localStorage.getItem("userData");
    if (loggedInUserData !== null  ) {

        return JSON.parse(loggedInUserData).userData[0];
    }
        return null;
}



export function formatDate(dte) {
    let date =new Date( dte);

    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }









    
  
