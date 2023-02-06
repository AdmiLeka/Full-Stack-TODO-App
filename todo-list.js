import axios from "axios";


export async function fetchTodos() {
  const api = "http://localhost:5000/todos";
  const todos = await axios.get(api).then((response) => {
      return response.data
  })
  return {todos}
}

let hehe = await fetchTodos()
console.log(hehe)

