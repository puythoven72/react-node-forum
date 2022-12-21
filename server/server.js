//const express = require('express');
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
// var mysql = require('mysql');
const port = 5000;
import cors from 'cors';


import { getCategories, getCategory, createCategory, getQuestionsByCategory, createQuestion, getAnswersByQuestion, createAnswer, checkUserName, registerUser, getUserLogin } from './database.js'
import { isStringValid } from './validation.js'

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//app.use(cors()) //and this




app.listen(port, function () {
  console.log('Server running on port  ' + port);
});


app.post('/registerUser', async function (req, res) {
  try {
    let newUserName = req.body.regusername;
    let password = req.body.regpassword;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;


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
  } catch (err) {
    res.json(err.message);
  }
});

// app.post('/loginUser', async function (req, res) {
//   try {
//     let userName = req.body.userName;
//     let password = req.body.password;

//     let userData = await getUserLogin(userName, password)
//     console.log("ddd" + userData + " from server");
//     if(userData.length > 0){
//       console.log("really gunna do it");
//       res.send({ userData });
//     }else{
//       console.log("not gunna do it");
//       res.send({ message: "User name or password not found" });
//     }
//   } catch (err) {
//     res.json(err.message);
//   }
// })







app.get('/api', async function (req, res) {
  try {
    const categories = await getCategories();
    res.send(categories);
  } catch (err) {
    res.json(err.message);
  }

});

app.post('/addCatagories', async function (req, res) {
  try {
    let newCategory = req.body.category;
    let userID = parseInt(req.body.userID);

    if (!isStringValid(3, newCategory)) {
     // res.send({ message: "Category must be at least 3 characters." });
      res.status(401).json({ message: "Category must be at least 3 characters." })
    } else {
      const categories = await createCategory(newCategory, userID);
      res.status(201).json({ "status": true, "result": "Request Success!" })

    }
  } catch (err) {
    res.json(err.message);
  }
});




app.get('/getQuestions', async function (req, res) {

  try {
    let id = req.query.id;
    const questions = await getQuestionsByCategory(id);
    res.send(questions);
  } catch (err) {
    res.json(err.message);
  }
});


app.post('/addQuestion', async function (req, res) {
  try {
    let newQuestion = req.body.question;
    let categoryID = req.body.categoryID;
    let createrID = parseInt(req.body.userID);
    const question = await createQuestion(newQuestion, categoryID, createrID);
    //res.status(201).send();
    res.status(201).json({ "status": true, "result": "Request Success!" })
  } catch (err) {
 //   res.json(err.message);
 console.log('question not added because '+ err)
    res.status(500).json({ "status": false, "result": "Request Failed " + err })
  }

});

app.get('/getAnswers', async function (req, res) {

  try {

    let categoryId = req.query.catId;
    let questionId = req.query.quesId;
    const answers = await getAnswersByQuestion(categoryId, questionId);
    res.send(answers);
  } catch (err) {
    res.json(err.message);
  }
});

app.post('/addAnswer', async function (req, res) {
  try {
    let newAnswer = req.body.answer;
    let categoryID = req.body.categoryID;
    let questionID = req.body.questionID;
    let create = parseInt(req.body.userID);

    const addAnswer = await createAnswer(newAnswer, categoryID, questionID, create);
    // res.status(201).send();
    res.status(201).json({ "status": true, "result": "Request Success!" })
  } catch (err) {
    //res.json(err.message);
    console.log('error Adding  Answer' + err)
    res.status(500).json({ "status": false, "result": "Request Failed because of " + err })
  }
});



app.post('/', async function (req, res) {

  try {
    let userName = req.body.userName;
    let password = req.body.password;

    let userData = await getUserLogin(userName, password);

    if (userData.length > 0) {

      res.send({ userData });
    }
    else {

      res.send({ message: "User name or password not found" });
    }
  } catch (err) {
    res.json(err.message + "error");
  }
})
