import { useEffect, useState } from "react"

export default function Bar() {
  const [bar, setBar] = useState(0)
  return (
    <div>
      <div className="text-blue-400">
        this is progress bar</div>
      <button onClick={() => setBar(bar + 1)}>Add</button>
      <div className="flex flex-col gap-2">
        {Array(bar).fill(null).map((_, idx) => <Progress key={idx} />)}
      </div>
    </div>
  )
}

function Progress() {
  const [start, setStart] = useState(false)
  useEffect(() => {
    setStart(true)
  }, [])
  return (
    <div className="h-2 bg-blue-100">
      <div className={`h-full bg-blue-500 origin-left transition-transform duration-1000 ${start ? 'scale-x-100' : 'scale-x-0'}`}>
      </div>
    </div >
  )
}
