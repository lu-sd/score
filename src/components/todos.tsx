import { useState } from "react"
let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' },
];
export default function Todos() {
  const [todo, setTodo] = useState("")
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  function handleSubmit(event: React.FormEvent) {
    // Listen to onSubmit events so that it works for both "Enter" key and
    // click of the submit <button>.
    event.preventDefault();
    // Trim the field and don't add to the list if it's empty.
    if (todo.trim() === '') {
      return;
    }
    // Trim the value before adding it to the tasks.
    setTasks([
      ...tasks,
      { id: id++, label: todo.trim() },
    ]);
    const newTasks = [...tasks, { id: id++, label: todo }]
    setTasks(newTasks)
    setTodo("")
  }
  function handleDelete(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add your task" />
        <button className=" border border-blue-500">Submit</button>
      </form>
      <ul>
        {tasks.map(({ id, label }) => <li key={id}>
          {label}
          <button className="ml-2 border border-red-200" onClick={() => handleDelete(id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

