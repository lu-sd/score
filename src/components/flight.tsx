import { useState } from "react"
const DAYInSeconds = 24 * 60 * 60 * 1000
const TODAY = formateDate(new Date())
function formateDate(time: Date) {
  const year = time.getFullYear()
  const month = (time.getMonth() + 1).toString().padStart(2, "0")
  const date = time.getDate().toString().padStart(2, "0")
  return [year, month, date].join("-")
}

export default function Flight() {
  const [flightOption, setFlightOption] = useState("one")
  const [departDate, setDepartDate] = useState(formateDate(new Date(Date.now() + DAYInSeconds)))
  const [returnDate, setReturnDate] = useState(departDate)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <select value={flightOption} onChange={e => setFlightOption(e.target.value)}>
        <option value="one">One-Way Flight</option>
        <option value="two">Return Flight</option>
      </select>
      <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} min={TODAY} />
      {flightOption === "two" && <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} min={departDate} />}
      <button>Book</button>
    </form >
  )
}
