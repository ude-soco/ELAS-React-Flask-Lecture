import {useState} from "react";
import Counter from "./components/Counter/Counter";

export default function App() {
  const [count, setCount] = useState(7);
  const [name, setName] = useState("Counter App");

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleReset = (value) => {
    setCount(value);
  };

  return (
    <>
      <Counter
        count={count}
        name={name}
        increase={handleIncrease}
        decrease={handleDecrease}
        reset={() => handleReset(0)}
      />
    </>
  );
}
