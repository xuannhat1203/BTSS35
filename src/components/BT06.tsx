import { useState } from "react";

export default function BT06() {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Bài 7<h5>Bài {count}</h5>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
