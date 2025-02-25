import { useState } from "react";
const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
export default function GreenLight() {
  const [order, setOrder] = useState<number[]>([])
  const [isDeactivating, setIsDeactivating] =
    useState(false)

  function deactivateCells() {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      // Use the callback version of setOrder to ensure
      // we are reading the most updated order value.
      setOrder((origOrder) => {
        // Make a clone to avoid mutation of the orders array.
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  }
  function handleClick(index: number) {
    const newOrder = [...order, index];
    setOrder(newOrder);

    // All the cells have been activated, we can proceed
    // to deactivate them one by one.
    if (
      newOrder.length ===
      config.flat().filter(Boolean).length
    ) {
      deactivateCells();
    }
  }
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="text-blue-300 text-center">Green Light</div>
      <div className="grid grid-cols-3 mt-2 p-5 gap-5 border border-gray-400 ">
        {config.flat().map((value, idx) => value ?
          <Square key={idx}
            onClick={() => handleClick(idx)}
            filled={order.includes(idx)}
            isDisabled={order.includes(idx) || isDeactivating} /> :
          <span key={idx} />)}
      </div>
      <div>Order Array: {order.join(", ")}</div>
    </div >
  );
}
function Square({ filled, onClick, isDisabled }:
  { filled: Boolean, onClick: () => void, isDisabled: boolean }) {
  return <button className={`border p-10 border-gray-400 ${filled ? "bg-green-700" : "bg-transparent"}`}
    onClick={onClick}
    disabled={isDisabled}></button>
}
