//const express = require('express');
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
// var mysql = require('mysql');
const port = 5000;
import path from 'path';

import { getCategories, getCategory, createCategory, getQuestionsByCategory, createQuestion, getAnswersByQuestion, createAnswer, checkUserName, registerUser,getUserLogin } from './database.js'
import { isStringValid } from './validation.js'

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());





// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password"
//   });





// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM forum.category;", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);

//   });
// });


app.listen(port, function () {
  console.log('Server running on port  ' + port);
});


app.post('/registerUser', async function (req, res) {

  let newUserName = req.body.regusername;
  let password = req.body.regpassword;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  console.log(password.length + " is length")

  if (!isStringValid(5, newUserName)) {
    res.send({ message: "User must be at least 5 characters" });
  } else if (!isStringValid(5, password)) {
    res.send({ message: "Password must be at least 5 characters" });
  } else if (!isStringValid(3, firstName)) {
    res.send({ message: "First Name must be at least 3 characters" });
  } else if (!isStringValid(3, lastName)) {
    res.send({ message: "Last Name must be at least 3 characters" });
  }
  else if (await checkUserName(newUserName)) {
    res.send({ message: "User Name Already Exists" });
  }
  else {
    let register = await registerUser(newUserName, password, firstName, lastName);
    if (register.insertId) {
      res.send({ message: "Registration Success" });
    } else {
     
    }
  }

});

app.post('/loginUser', async function (req, res) {
  let userName = req.body.userName;
  let password = req.body.password;

  console.log(userName + " is user");
  console.log(password + " Is password");

 let userData= await getUserLogin(userName,password)
// console.log(JSON.stringify(userData) + 'XXX') ;
 res.send({ userData });
 

})




app.get('/api', async function (req, res) {
  const categories = await getCategories();
  res.send(categories);
  // console.log('success calls');
  // res.json({"users":["userOne","userTwo","userThree"]});

});

app.post('/addCatagories', async function (req, res) {
  console.log(req.body);
  let newCategory = req.body.category;
  let userID = parseInt( req.body.userID);
  const categories = await createCategory(newCategory, userID);
});




app.get('/getQuestions', async function (req, res) {
  console.log("test1");
  try {
    console.log(req.query.id);
    let id = req.query.id;
    const questions = await getQuestionsByCategory(id);
    console.log(questions);
    res.send(questions);
  } catch (err) {
    res.json(err.message);
  }
});


app.post('/addQuestion', async function (req, res) {
  console.log(req.body);
  let newQuestion = req.body.question;
  let categoryID = req.body.categoryID;
  let createrID = parseInt( req.body.userID);

  console.log(categoryID + " is the id");
  const question = await createQuestion(newQuestion, categoryID, createrID);

});

app.get('/getAnswers', async function (req, res) {
  console.log("Get Anwswers");
  try {

    let categoryId = req.query.catId;
    let questionId = req.query.quesId;
    console.log("Get Anwswers " + categoryId + " " + questionId);
    const answers = await getAnswersByQuestion(categoryId, questionId);
    console.log(answers);
    res.send(answers);
  } catch (err) {
    res.json(err.message);
  }


});

app.post('/addAnswer', async function (req, res) {
  console.log(req.body);
  let newAnswer = req.body.answer;
  let categoryID = req.body.categoryID;
  let questionID = req.body.questionID;
  console.log(categoryID + " is the id");
  const question = await createAnswer(newAnswer, categoryID, questionID, 7);

});




  //  res.send(categories);
  // console.log('success calls');
  // res.json({"users":["userOne","userTwo","userThree"]});


