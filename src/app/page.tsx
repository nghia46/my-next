"use client";
import React, { useState } from "react";
import Button from "@/components/Button/Button"; // Đảm bảo import đúng đường dẫn

export default function Page() {
  const [count, setCount] = useState(0); // State cho count
  const [number, setNumber] = useState(1); // State cho number

  // Hàm tăng count
  const increment = (num: number) => {
    setCount((prevCount) => prevCount + num);
  };

  // Hàm giảm count
  const decrement = (num: number) => {
    setCount((prevCount) => prevCount - num);
  };

  // Xử lý thay đổi giá trị input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumber(value);
    }
  };

  return (
    <div>
      {/* Input để nhập giá trị number */}
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
      />

      {/* Hiển thị giá trị count */}
      <h1>Count: {count}</h1>

      {/* Nút Increment */}
      <Button onClick={() => increment(number)}>Increment</Button>

      {/* Nút Decrement */}
      <Button onClick={() => decrement(number)}>Decrement</Button>
    </div>
  );
}