import { useEffect, useState } from "react"

export default function PerBar() {
  return (
    <div>
      <div className="text-blue-400">
        this is % bar just use css and props
      </div>
      <div className="flex flex-col gap-2">
        <Progress value={25} />
        <Progress value={75} />
      </div>
    </div>
  )
}

function Progress({ value }: { value: number }) {
  const finished = Number(value / 100) * 100
  return (
    <div className="h-8 bg-blue-100 p-1 ">
      <div style={{ width: `${finished}%` }} className="h-full text-center bg-blue-600">{finished}%</div>
    </div >
  )
}
