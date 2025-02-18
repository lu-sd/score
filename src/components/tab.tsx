import { useState } from "react";

type item =
  {
    value: string,
    label: string,
    panel: string
  }
type props = { items: item[] }

function Tab({ items }: props) {
  const [isShow, setIsShow] = useState<string>("html");

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => setIsShow(item.value)}
            className={`px-4 py-2  ${isShow === item.value
              ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-600"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {items.map((item) => (
          <div
            key={item.value}
            hidden={isShow != item.value}>
            {item.panel}
          </div>
        ))}
      </div>
    </div>
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
