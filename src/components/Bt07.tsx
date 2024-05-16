import React, { useState } from "react";

export default function Bt07() {
  const [count, setCount] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e);
    setCount(count + 1);
  };
  return (
    <div>
      Bài 7<textarea onChange={handleChange}></textarea>
      <h5>Số kí tự: {count}</h5>
    </div>
  );
}
