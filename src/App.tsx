import { Fragment, useState } from "react";

import { FieldValues, useForm } from "react-hook-form";

function getRanks(arr: number[]) {
  // Create a copy of the original array and sort it
  const sortedArr = [...arr].sort((a, b) => b - a);

  // Create a Map to store the ranks of each unique element
  const rankMap = new Map();

  // Initialize the rank counter
  let rank = 1;

  // Calculate ranks for each unique element in the sorted array
  for (const num of sortedArr) {
    if (!rankMap.has(num)) {
      rankMap.set(num, rank);
      rank++;
    }
  }

  // Create an array of ranks for the original array
  const ranks = arr.map((num) => rankMap.get(num));

  return ranks;
}

function App() {
  const List = [
    { name: "王一", rank: 0, score: 0 },
    { name: "田二", rank: 0, score: 0 },
    { name: "张三", rank: 0, score: 0 },
    { name: "李四", rank: 0, score: 0 },
    { name: "王五", rank: 0, score: 0 },
    { name: "赵六", rank: 0, score: 0 },
    { name: "田七", rank: 0, score: 0 },
    { name: "周八", rank: 0, score: 0 },
    { name: "吴九", rank: 0, score: 0 },
    { name: "郑十", rank: 0, score: 0 },
  ];
  const [formData, setFormData] = useState(List);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: FieldValues) => {
    // console.log(data);
    const outputObject = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, parseInt(value, 10)])
    );
    const scores = Object.values(outputObject);
    // console.log("score", scores);
    const ranks = getRanks(scores);
    // console.log("rank", ranks);
    // console.log("length", List.length);
    let newScore = ranks.map((rank) => {
      return List.length - rank + 1;
    });
    // console.log("newScore", newScore);
    let newData = formData.map((person, index) => {
      return { ...person, score: newScore[index], rank: ranks[index] };
    });
    setFormData([...newData]);
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl text-center mt-10">记分</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-2 ">
          <p>姓名</p>
          <p>输入</p>
          <p>排名</p>
          <p>分数</p>
          {formData.map((person) => (
            <Fragment key={person.name}>
              <label
                htmlFor={person.name}
                className="block mb-2 text-sm font-medium"
              >
                {person.name}
              </label>
              <input
                type="number"
                min={0}
                id={person.name}
                {...register(person.name)}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
              <p>{person.rank}</p>
              <p>{person.score}</p>
            </Fragment>
          ))}
        </div>
        <div>
          <div className="flex gap-x-5">
            <button
              type="submit"
              className="text-white container mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-48  px-5 py-2.5 text-center"
            >
              计算
            </button>
            <button
              onClick={() => reset()}
              className="text-white container mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-48  px-5 py-2.5 text-center"
            >
              重置
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
