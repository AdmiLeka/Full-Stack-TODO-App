import express from 'express';
import { todos, deleteTodo, createTodo } from './db/database.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors(), express.json());

app.get('/todos', (req, res) =>{
    res.json(todos);
});

app.delete('/todos/delete/:id', (req,res) => {
    const id = req.params.id
    deleteTodo(id)
    res.json(`Todo with the id of ${id} was successfully deleted`)
})

app.post('/todos', (req, res) => {
    console.log(req.body.text)
    const todo = createTodo(req.body.text, req.body.completed)
    res.status(201).json(todo)
})

app.listen(PORT || '5000', () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
});