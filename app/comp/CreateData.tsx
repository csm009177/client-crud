"use client";
import React, { useContext, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

const CreateData: React.FC = () => {
  const [input, setInput] = useState("");
  // const [datas, setDatas] = useState<string[]>([]);
  const {datas, setDatas} = useContext(DatasContext)

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type here"
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit">submit</button>
      {datas.map((data, index) => {
        return <div key={index}>{data}</div>;
      })}
    </form>
  );
};

export default CreateData;
