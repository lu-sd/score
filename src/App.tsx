import { useState } from "react";
import Form from "@/components/form";
import Flight from "@/components/flight";
import Table from "@/components/table";
import Bar from "@/components/bar";
import PerBar from "@/components/perbar";
import TemConvert from "./components/temConvert";

function App() {
  return (
    <div className="flex flex-col gap-4 justify-center min-w-full items-center">
      <div className="text-3xl mt-8">hello moon</div>
      <Form />
      <Flight />
      <Table />
      <Bar />
      <PerBar />
      <TemConvert />
    </div>
  );
}

export default App;
