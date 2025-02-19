import { useEffect, useState } from "react"

export default function Clock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => { setDate(new Date) }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])


  const hours = date.getHours()
  const mins = date.getMinutes()
  const secs = date.getSeconds()
  function PadTwoDigit(time: number) {
    return time >= 10 ? time : String(time).padStart(2, "0")
  }
  return (
    <div>
      <div className="text-blue-400">Digital Clock</div>
      <div>{PadTwoDigit(hours)}:{PadTwoDigit(mins)}:{PadTwoDigit(secs)}</div>
    </div>
  )
}

