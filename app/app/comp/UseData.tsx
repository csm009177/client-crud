// app\comp\UpdateData.tsx
import React, { useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

const UseData: React.FC = () => {
  const [input, setInput] = useState("");
  const { datas, setDatas } = useContext(DatasContext);

  // 입력 양식 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 선택한 데이터의 내용을 변경하고 업데이트하는 함수
  const handleUpdate = (index: number) => {
    const updatedDatas = [...datas];
    updatedDatas[index] = input;
    setDatas(updatedDatas);
    setInput(""); // 입력 필드 초기화
  };

  return (
    <>
      {datas.map((data, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={() => handleUpdate(index)}>Update</button>
        </div>
      ))}
    </>
  );
};

export default UseData;
