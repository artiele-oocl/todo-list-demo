export default {
  getAll: () => fetch(
    "http://localhost:9090/api/todos",
    {mode: 'cors'}
    ),
  createTodo: (todo) => fetch(
    "http://localhost:9090/api/todos", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(todo)
    }),
  patchStatus: (id, status) => fetch(
    "http://localhost:9090/api/todos/"+id, {
      mode: 'cors',
      method: 'PATCH',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(status)
    })
}
