import axios from "axios";

export interface Todo {
  id: number;
  text: string;
  created: string;
  completed: boolean;
}

export async function fetchTodos() {
  const api = "http://localhost:5000/todos";
  const todos = await axios.get(api).then((response) => {
      return response.data
  })
  return {todos}
}

