// app\comp\UpdateData.tsx
import React, { useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

const UpdateData: React.FC = () => {
  const [input, setInput] = useState("");
  const { datas, setDatas } = useContext(DatasContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: input })
    });
    const data = await response.json();
    setDatas((prevDatas) => {
      return [data, ...prevDatas];
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type here"
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateData;