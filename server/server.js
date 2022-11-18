//const express = require('express');
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
// var mysql = require('mysql');
const port = 5000;
import path from 'path';

import { getCategories, getCategory, createCategory, getQuestionsByCategory,createQuestion,getAnswersByQuestion} from './database.js'


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

app.get('/api', async function (req, res) {
  const categories = await getCategories();
  res.send(categories);
  // console.log('success calls');
  // res.json({"users":["userOne","userTwo","userThree"]});

});

app.post('/addCatagories', async function (req, res) {
  console.log(req.body);
  let newCategory = req.body.category;
  const categories = await createCategory(newCategory, 8);
  //  res.send(categories);
  // console.log('success calls');
  // res.json({"users":["userOne","userTwo","userThree"]});

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
 
  console.log(categoryID + " is the id");
  const question = await createQuestion(newQuestion,categoryID,7);

});

  app.get('/getAnswers', async function (req, res) {
    console.log("Get Anwswers");
    try {
    
      let categoryId = req.query.catId;
      let questionId = req.query.quesId;
      const answers = await getAnswersByQuestion(categoryId,questionId);
      console.log(answers);
      res.send(answers);
    } catch (err) {
      res.json(err.message);
    }
  
  
  });
  



  
  //  res.send(categories);
  // console.log('success calls');
  // res.json({"users":["userOne","userTwo","userThree"]});


