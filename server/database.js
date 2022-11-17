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
    const [rows] = await pool.query('Select * from question Where category = ?',[categoryId]);
    return rows;
};

export async function createQuestion(question,categoryID,createID) {
    const [result] = await pool.query(`Insert into question (question,category,createdby) values(?,?,?)`,[question,categoryID,createID]);
    const id = result.insertId;
    return getCategory(id);
};




//const categories = await createCategory("cat",2);
//console.log(categories);