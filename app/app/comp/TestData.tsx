// pages/index.tsx
import React, { createContext, useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

const TestData: React.FC = () => {
  const [input, setInput] = useState("");
  const { datas, setDatas } = useContext(DatasContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: input })
    });
// 수정된 코드
const data = await response.json();
setDatas((prevDatas) => {
  return [data.message, ...prevDatas]; // data.message만 렌더링
});
    setInput("");
  };

  const handleUpdate = async (index: number) => {
    const response = await fetch(`http://localhost:8000/update/${index}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: input })
    });
    const data = await response.json();
    setDatas((prevDatas) => {
      const updatedDatas = [...prevDatas];
      updatedDatas[index] = data;
      return updatedDatas;
    });
    setInput("");
  };

  const handleDelete = async (index: number) => {
    await fetch(`http://localhost:8000/delete/${index}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setDatas((prevDatas) => {
      const updatedDatas = [...prevDatas];
      updatedDatas.splice(index, 1);
      return updatedDatas;
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type here"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">submit</button>
      </form>
      {datas.map((data, index) => (
        <div key={index} style = {{display:"flex", flexDirection:"row"}}>
          <div style={{width:"20vw"}}>{data}</div>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={() => handleUpdate(index)}>Update</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </main>
  );
};

export default TestData;