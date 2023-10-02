import { useState } from "react";
function App() {
  const names: string[] = ["zhang san", "lisi", "wangwu"];
  const [formData, setFormData] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(event.currentTarget.lisi.value);
    // const formData = new FormData(event.currentTarget);
    // console.log(formData.get("lisi"));
  };
  return (
    <>
      <div className='text-3xl text-center mt-10'>hello moon</div>
      <form onSubmit={handleSubmit}>
        <div className='ml-2 grid gap-3 mb-6 md:grid-cols-2'>
          {names.map((name, index) => (
            <div key={index}>
              <label htmlFor={name} className='block mb-2 text-sm font-medium'>
                {name}
              </label>
              <input
                type='number'
                id={name}
                className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
              />
            </div>
          ))}
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
