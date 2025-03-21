import Form from "@/components/form";
import Flight from "@/components/flight";
import Table from "@/components/table";
import Bar from "@/components/bar";
import PerBar from "@/components/perbar";
import TemConvert from "./components/temConvert";
import Mortgage from "./components/mortgate";
import Tabs from "./components/tab";
import Clock from "./components/clock"
import DataTable from "./components/dataTable";
import Dice from "./components/dice.tsx"
import File from "./components/file"
import GreenLight from "./components/greenLight.tsx";
import CssCom from "./components/css.tsx";
import LikeButton from "./components/likeButton.tsx";
import Model from "./components/model.tsx";
import Todos from "./components/todos.tsx";
import TrafficLight from "./components/traficLight.tsx";
function App() {
  return (
    <div className="flex flex-col gap-4 justify-center min-w-full items-center">
      <div className="m-4 grid grid-rows-[0fr] rounded-md bg-blue-200 bg-opacity-40 p-4 transition-all duration-500 ease-in-out hover:grid-rows-[1fr]">
        <div className="overflow-hidden">Expandable content</div>
      </div>

      <TrafficLight />
      <Todos />
      <Model />
      <LikeButton />
      <CssCom />
      <GreenLight />
      <File />
      <Dice />
      <DataTable />
      <Clock />
      <Tabs />
      <Form />
      <Flight />
      <Table />
      <Bar />
      <PerBar />
      <TemConvert />
      <Mortgage />
    </div>
  );
}

export default App;
