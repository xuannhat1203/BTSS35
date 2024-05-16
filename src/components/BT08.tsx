import { useState } from "react";

export default function BT08() {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      Gia tri: {value}
      <select onChange={handleChange} value={value}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}
