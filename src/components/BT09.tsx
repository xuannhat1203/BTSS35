import React, { useState } from "react";

export default function BT09() {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <h4>Bài 9: Giới tính</h4>
      <label>
        <input type="radio" value="Nam" onChange={handleGenderChange} />
        Nam
      </label>
      <label>
        <input type="radio" value="Nữ" onChange={handleGenderChange} />
        Nữ
      </label>
      <label>
        <input type="radio" value="Khác" onChange={handleGenderChange} />
        Khác
      </label>
      <p>Giới tính đã chọn: {gender}</p>
    </div>
  );
}
