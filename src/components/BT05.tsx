import React, { useState } from "react";

export default function BT05() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder=" Bài 5" />
      <h5>{text}</h5>
    </div>
  );
}
