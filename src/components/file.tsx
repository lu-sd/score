import { useState } from "react";

type fileData = { id: number; name: string; children?: fileData[] }
const data = [
  {
    id: 1,
    name: 'README.md',
  },
  {
    id: 2,
    name: 'Documents',
    children: [
      {
        id: 3,
        name: 'Word.doc',
      },
      {
        id: 4,
        name: 'Powerpoint.ppt',
      },
    ],
  },
  {
    id: 5,
    name: 'Downloads',
    children: [
      {
        id: 6,
        name: 'unnamed.txt',
      },
      {
        id: 7,
        name: 'Misc',
        children: [
          {
            id: 8,
            name: 'foo.txt',
          },
          {
            id: 9,
            name: 'bar.txt',
          },
        ],
      },
    ],
  },
];
export default function File() {

  return (
    <div>
      <div className="text-blue-400">This is File Explorer </div>
      <RecursiveList data={data} />
    </div>
  )
}

function RecursiveList({ data }: { data: fileData[] }) {
  if (!data || !data.length) {
    return null
  }
  return (
    <ul className="pl-4">
      {data.map((item) =>
        < FileObject key={item.id} item={item} />)}
    </ul>
  )
}
function FileObject({ item }: { item: fileData }) {
  const [expanded, setExpanded] = useState(false)
  const isDire = Boolean(item.children)
  return (<li>
    <button
      className={`${isDire ? " text-red-400 cursor-pointer font-bold" : "cursor-none"}`}
      onClick={() => {
        if (!isDire) {
          return
        }
        setExpanded(!expanded)
      }}><span>{item.name}</span>{isDire && <> {expanded ? '-' : "+"}</>}</button>
    {item.children && expanded && <RecursiveList data={item.children} />}
  </li>)

}
