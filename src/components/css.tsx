export default function CssCom() {
  return (<>
    {/* p-10 makes the div itself bigger, adding space inside it. */}
    <div className="group  border border-red-500 p-10">
      <button className="bg-blue-500 text-white p-4">Hover me</button>
      <p className="absolute hidden group-hover:block bg-gray-700 text-white p-2">
        I appear when hovering over the parent!
      </p>
    </div>
    {/* gap  Adds space between flex/grid items */}
    <div className="flex gap-4 border border-red-500 p-4">
      <div className="bg-blue-500 text-white p-4">Item 1</div>
      <div className="bg-green-500 text-white p-4">Item 2</div>
    </div>
    <hr />
    {/* margin Adds space outside an element */}
    <div className="flex border border-red-500 p-4">
      <div className="bg-blue-500 text-white p-4 m-4">Item 1</div>
      <div className="bg-green-500 text-white p-4 m-4">Item 2</div>
    </div>
  </>)
}
