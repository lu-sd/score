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
      <ul>
        <RecursiveList data={data} level={1} />
      </ul>
    </div>
  )
}

function RecursiveList({ data, level }: { data: fileData[], level: number }) {
  if (!data || !data.length) {
    return null
  }
  const dir = data.filter((file) => file.children)
  dir.sort((a, b) => a.name.localeCompare(b.name))
  const nonDir = data.filter((file) => !file.children)
  nonDir.sort((a, b) => a.name.localeCompare(b.name))
  const items = [...dir, ...nonDir]
  return (
    <>
      {items.map((item) =>
        < FileObject key={item.id} item={item} level={level} />)}
    </>
  )
}
function FileObject({ item, level }: { item: fileData, level: number }) {
  const [expanded, setExpanded] = useState(false)
  const isDire = Boolean(item.children)
  return (<li style={{ paddingLeft: (level - 1) * 16 }}>
    <button
      className={`${isDire ? " text-red-400 cursor-pointer font-bold" : "cursor-none"}`}
      onClick={() => {
        if (!isDire) {
          return
        }
        setExpanded(!expanded)
      }}><span>{item.name}</span>{isDire && <> {expanded ? '-' : "+"}</>}</button>
    {/* This recursion allows the component to display nested levels of items without knowing in advance how deep the structure goes. */}
    {item.children && item.children.length > 0 && expanded && <RecursiveList data={item.children} level={level + 1} />}
  </li>)

}
