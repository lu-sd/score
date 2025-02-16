import { useState } from "react";

export default function TemConvert() {
  const [cel, setCel] = useState("")
  const [far, setFar] = useState("")
  function isValid(value: number) {
    return !isNaN(value)
  }
  function handleConvert(value: string, type: string) {
    if (value === "") {
      setCel("")
      setFar("")
      return
    }

    const numVal = Number(value)
    if (isValid(numVal)) {
      if (type === "cel") {
        const newFar = numVal * 9 / 5 + 32
        setCel(value)
        setFar(/\.\d{5}/.test(newFar.toString()) ? newFar.toFixed(4) : newFar.toString())
      } else {
        const newCel = ((numVal - 32) * 5) / 9
        setFar(value)
        setCel(/\.\d{5}/.test(newCel.toString()) ? newCel.toFixed(4) : newCel.toString())
      }
    } else {
      setCel("")
      setFar("")
    }
  }
  return (
    <div >
      <div className="text-blue-400 text-center">Celsius to Fahrenheit</div>
      <div className="flex gap-2">
        <div className="flex gap-2">
          <label htmlFor="cel">Celsius</label>
          <input value={cel} onChange={(e) => handleConvert(e.target.value, "cel")} type="number" id="cel" />
        </div>
        <div> = </div>
        <div className="flex gap-2">
          <label htmlFor="far">Fahrenheit</label>
          <input type="number" id="far" value={far} onChange={(e) => handleConvert(e.target.value, "far")} />
        </div>
      </div>
    </div>
  );
}
