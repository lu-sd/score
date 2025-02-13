import { useState } from "react"

function TableCom({ rows, cols }: { rows: string, cols: string }) {
  return (
    <table>
      <tbody>
        {Array.from({ length: Number(rows) }).map((_, idx) => (
          <tr key={idx}>
            {Array.from({ length: Number(cols) }).map((_, colIdx) => (
              <td key={colIdx}>
                {[idx + 1, colIdx + 1]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Table() {
  const [rows, setRows] = useState("")
  const [cols, setCols] = useState("")
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

  }
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <label htmlFor="rows">Rows</label>
          <input type="number" value={rows} onChange={e => setRows(e.target.value)} />
        </div>
        <div className="flex gap-2">
          <label htmlFor="cols">Cols</label>
          <input type="number" value={cols} onChange={e => setCols(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
      {Boolean(rows) && Boolean(cols) && <TableCom rows={rows} cols={cols} />}
    </div>
  )
}
