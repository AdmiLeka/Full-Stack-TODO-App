import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export const [todos] = await pool.query("SELECT * FROM todos");

async function getTodo(id) {
    const [result] = await pool.query(`
    SELECT * FROM todos
    WHERE id = ?`, [id]);
    return result[0];
}

export async function deleteTodo(id) {
    const [result] = await pool.query(`
    DELETE FROM todos
    WHERE id = ?`, [id]);
    return result[0];
}

export async function createTodo(text, completed) {
    const [result] = await pool.query(`
    INSERT INTO todos (text, completed)
    VALUES (?, ?)`, [text, completed]);
    return result.insertId;
}

//export const todosd = await getTodos();