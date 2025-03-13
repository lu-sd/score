import { useState } from "react";


export default function Model() {
  const [open, setOpen] = useState(false)


  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-200 text-white px-2 py-1 rounded-xl shadow-sm"
      >
        Show Model
      </button>
      <TrueM open={open} onClose={() => setOpen(false)} title="Model Title">
        <p>This is some other contents for model</p>
      </TrueM>

    </div>
  );
}

type Prop = {
  open?: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
}

function TrueM({ open = false, onClose, title, children }: Prop) {
  if (!open) {
    return null
  }
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg flex gap-4 flex-col items-center relative">
        <h2 className="font-semibold" >{title}</h2>
        <div>{children}</div>
        <button className="absolute top-2 right-2 " onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
