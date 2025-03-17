import { useEffect, useState } from "react"
const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};
export default function TrafficLight() {
  const [currentColor, setCurrentColor] = useState("green")

  useEffect(() => {
    const key = currentColor as keyof typeof config
    const { duration, next } = config[key]
    // Use setTimeout when you want to delay execution once.
    // Use setInterval when you need a repeated action,
    const timerId = setTimeout(() => {
      setCurrentColor(next)
    }, duration)
    return () => { clearTimeout(timerId) }
  }, [currentColor])

  return (<div className="flex gap-4 bg-black rounded-l p-2 ">
    {Object.keys(config).map((color) => {
      const key = color as keyof typeof config
      return <Light key={color} backgroundColor={color === currentColor ? config[key].backgroundColor : ""} />
    })}
  </div>)
}

function Light({ backgroundColor }: { backgroundColor: string }) {

  return (<div className="bg-gray-400 h-3 w-3 rounded-full" style={{ backgroundColor }}>
  </div >)

}
