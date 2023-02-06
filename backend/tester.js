// import { getTodos } from '~~/backend/database';
// const todoList = await getTodos();
// console.log(haha)


import { getTodos } from "./db/database.js";

export const haha = await getTodos();
console.log(haha)