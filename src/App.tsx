import { useState } from "react";
import Form from "@/components/form";
import Flight from "@/components/flight";

function App() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="text-3xl mt-8">hello moon</div>
      <Form />
      <Flight />
    </div>
  );
}

export default App;
