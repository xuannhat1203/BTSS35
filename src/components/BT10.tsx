import React, { useState } from "react";

export default function BT10() {
  const [item, setItem] = useState<string[]>([]);

  const handleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setItem((prevItems) => [...prevItems, value]);
    } else {
      setItem((prevItems) => prevItems.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h4>Bài 10: Sở thích: {item.join(", ")}</h4>
      <input onChange={handleButton} type="checkbox" value="Đi chơi" />
      Đi chơi
      <input onChange={handleButton} type="checkbox" value="Code" />
      Code
      <input onChange={handleButton} type="checkbox" value="Bơi lội" />
      Bơi lội
      <input onChange={handleButton} type="checkbox" value="Nhảy dây" />
      Nhảy dây
    </div>
  );
}
