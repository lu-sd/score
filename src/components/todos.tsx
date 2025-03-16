import { useState } from "react"
let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' },
];
export default function Todos() {
  const [todo, setTodo] = useState("")
  const [tasks, settasks] = useState(INITIAL_TASKS)
  function handleSubmit() {
    const newTasks = [...tasks, { id: id++, label: todo }]
    settasks(newTasks)
    setTodo("")
  }
  function handleDelete(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id)
    settasks(newTasks)
  }
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center">Todo List</h1>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button className=" border border-blue-500" onClick={handleSubmit}>Submit</button>
      {tasks.map(({ id, label }) => <li key={id}>
        <span>{label}</span>
        <button className="border border-red-200" onClick={() => handleDelete(id)}>Delete</button>
      </li>)}
    </div>
  )
}

