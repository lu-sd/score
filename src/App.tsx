import { useState } from "react";

import { FieldValue, FieldValues, useForm } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

function App() {
  const names = ["zhang san", "lisi", "wangwu"];
  const [formData, setFormData] = useState<{ [x: string]: any }[]>([]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: FieldValues) => {
    // console.log(data);
    const results = names.map((name) => ({
      [name]: data[name],
    }));
    setFormData([...results]);
    reset();
  };

  return (
    <>
      <div className='text-3xl text-center mt-10'>hello moon</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='ml-2 grid gap-3 mb-6 md:grid-cols-2'>
          {names.map((name, index) => (
            <div key={index}>
              <label htmlFor={name} className='block mb-2 text-sm font-medium'>
                {name}
              </label>
              <input
                type='number'
                id={name}
                {...register(name)}
                className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>姓名</TableHead>
            <TableHead>分数</TableHead>
            <TableHead>排名</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formData.map((obj) => (
            <TableRow key={Object.keys(obj)[0]}>
              <TableCell>{Object.keys(obj)[0]}</TableCell>
              <TableCell>{Object.values(obj)[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
