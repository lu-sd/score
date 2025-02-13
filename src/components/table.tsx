import { useState } from "react"

function TableCom({ rows, cols }: { rows: number, cols: number }) {
  return (
    <table>
      <tbody>
        {Array.from({ length: Number(rows) }).map((_, rowIdx) => (
          <tr key={rowIdx}>
            {Array.from({ length: Number(cols) }).map((_, colIdx) => {
              const isEven = colIdx % 2 === 0
              const value = isEven ? (rows * colIdx + rowIdx + 1) : (rows * (colIdx + 1) - rowIdx)
              return <td key={colIdx}>
                {value}
              </td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Table() {
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(0)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    // const rowsVal = Number(formData.get("rows"))
    // const colsVal = Number(formData.get("cols"))
    const dataObj = Object.fromEntries(formData)
    const rowsVal = Number(dataObj.rows)
    const colsVal = Number(dataObj.cols)
    setRows(rowsVal)
    setCols(colsVal)
  }
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <label htmlFor="rows">Rows</label>
          <input type="number" id="rows" name="rows" min={1} />
        </div>
        <div className="flex gap-2">
          <label htmlFor="cols">Cols</label>
          <input type="number" id="cols" name="cols" min={1} />
        </div>
        <button>Submit</button>
      </form>
      {Boolean(rows) && Boolean(cols) && <TableCom rows={rows} cols={cols} />}
    </div>
  )
}
