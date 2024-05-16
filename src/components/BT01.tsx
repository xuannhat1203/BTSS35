import { useState } from "react";

export default function BT01() {
  const [name, setName] = useState<string>("NGuyễn Xuân Nhất");
  console.log(setName);
  return (
    <div>
      <h4>Bài 1: {name}</h4>
    </div>
  );
}
