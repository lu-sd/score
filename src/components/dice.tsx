import React, { useState, type FormEvent } from "react";

export default function Dice() {
  const [dice, SetDice] = useState<number[]>([])

  function getDice(dice: string) {
    return Array.from({ length: Number(dice) }, () =>
      Math.max(Math.ceil(Math.random() * 6), 1)
    )
  }
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const diceNum = formData.get("dices") as string
    SetDice(getDice(diceNum))
  }
  return (
    <div>
      <div className="text-blue-300 text-center">Dice</div>
      <form
        onSubmit={submitForm}
        className="flex gap-4"
      >
        <label htmlFor="name">Number of dice</label>
        <input type="number" min={1} max={12} name="dices" id="name" />
        <button>Roll</button>
      </form >
      <hr />
      <div className="grid grid-cols-3 mt-2">
        {dice.map((value, idx) => <Element key={idx} value={value} />)}
      </div>
    </div >
  );
}
function Element({ value }: { value: number }) {
  return <div >{value}</div>
}
