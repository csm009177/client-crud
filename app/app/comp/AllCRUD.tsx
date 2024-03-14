// pages/index.tsx
import React, { createContext, useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";


const AllCRUD: React.FC = () => {
  const [input, setInput] = useState("");
  const { datas, setDatas } = useContext(DatasContext);

  // 입력 양식 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDatas((prevDatas) => {
      console.log("이전 데이터", prevDatas);
      return [input, ...prevDatas];
    });
    setInput(""); // 입력 필드 초기화
  };

  // 선택한 데이터의 내용을 변경하고 업데이트하는 함수
  const handleUpdate = (index: number) => {
    const updatedDatas = [...datas];
    updatedDatas[index] = input;
    setDatas(updatedDatas);
    setInput(""); // 입력 필드 초기화
  };

  // 선택한 데이터를 삭제하는 함수
  const handleDelete = (index: number) => {
    const updatedDatas = [...datas];
    updatedDatas.splice(index, 1);
    setDatas(updatedDatas);
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
        <button type="submit">submit</button> {/* form 제출 버튼 */}
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
          <button onClick={() => handleDelete(index)}>Delete</button> {/* 삭제 버튼 */}
        </div>
      ))}
    </main>
  );
};

export default AllCRUD;
