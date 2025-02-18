import { useState } from "react";

type item =
  {
    value: string,
    label: string,
    panel: string
  }
type props = { items: item[] }

function Tab({ items }: props) {
  const [isShow, setIsShow] = useState("html")
  return (
    <div className="flex gap-3">
      {items.map((item) => (
        <div key={item.value}>
          <button onClick={() => setIsShow(item.value)}>{item.label}</button>
          {/* <div className="max-w-xs" hidden={item.value !== isShow}>{item.panel}</div> */}
          {item.value === isShow && <p>{item.panel}</p>}
        </div>
      ))
      }
    </div >
  );
}

export default function Tabs() {
  return <Tab
    items={[
      {
        value: "html",
        label: 'HTML',
        panel:
          'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        value: "css",
        label: 'CSS',
        panel:
          'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
      },
      {
        value: "js",
        label: 'JavaScript',
        panel:
          'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
      },
    ]}
  />;
}
