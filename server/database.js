import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();


const pool = mysql.createPool({
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PASSWORD,
    database: process.env.MySQL_DATABASE
}).promise();


export async function getCategories() {
    const [rows] = await pool.query('Select * from category');
    return rows;
};

export async function getCategory(id) {
    const [rows] = await pool.query('Select * from category where id = ?',[id]);
    return rows[0];
};


export async function createCategory(name,createID,) {
    const [result] = await pool.query(`Insert into category(name,createdby) values(?,?)`,[name,createID]);
    const id = result.insertId;
    return getCategory(id);
};



export async function getQuestionsByCategory(categoryId) {
    const [rows] = await pool.query( `Select question.id,question.question,question.category,question.createdby,question.created,users.firstname,users.lastname from question 
    Left JOIN users ON question.createdby=users.id where question.category = ?`,[categoryId]);
    return rows;
};

export async function createQuestion(question,categoryID,createID) {
    const [result] = await pool.query(`Insert into question (question,category,createdby) values(?,?,?)`,[question,categoryID,createID]);
    const id = result.insertId;
    return getCategory(id);
};

export async function getAnswersByQuestion(categoryId,questionId) {
    const [rows] = await pool.query(`SELECT answer.id,answer.answer,answer.category,answer.question,answer.createdby,answer.created, users.firstname,users.lastname FROM answer 
    left  join users ON answer.createdby=users.id
    where category = ? and question = ?`,[categoryId,questionId]);
    return rows;
};


export async function createAnswer(answer,categoryID,questionID,createID) {
    const [result] = await pool.query(`Insert into answer (answer,category,question,createdby) values (?,?,?,?)`,[answer,categoryID,questionID,createID]);
    const id = result.insertId;
    return getCategory(id);
};

export async function checkUserName(username) {
    const [result] = await pool.query(`SELECT username FROM users Where username  = ?`,[username]); 
   
    if(result.length > 0){
        return true;
    }
    return false;
};

export async function registerUser(username,password,firstname,lastname) {
    const [result] = await pool.query(`Insert into forum.users (username,password,firstname,lastname) values(?,?,?,?)`,[username,password,firstname,lastname]);
   
    return result;
};


export async function getUserLogin(username,password) {
    const [result] = await pool.query(`SELECT id,username,firstName,lastName FROM users Where username  = ?  and BINARY password = ?`,[username,password]);  
  
    if(result){
        return result;
    }
    return null;

};


