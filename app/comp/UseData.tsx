// app/comp/UpdateData.tsx

import React, { useState, useContext } from "react";
import { DatasContext } from "../context/CRUDContext";

const UseData: React.FC = () => {
  const [input, setInput] = useState("");
  const { datas, setDatas } = useContext(DatasContext);

  const [selectedDataIndex, setSelectedDataIndex] = useState<number | null>(
    null
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleEditClick = (index: number) => {
    setSelectedDataIndex(index);
    setInput(datas[index]);
  };

  const handleSaveClick = () => {
    if (selectedDataIndex !== null) {
      setDatas((prevDatas) => {
        const updatedDatas = [...prevDatas];
        updatedDatas[selectedDataIndex] = input;
        return updatedDatas;
      });
      setInput(""); // 입력 필드 초기화
      setSelectedDataIndex(null);
    }
  };

  return (
    <>
      {datas.map((data, index) => (
        <div key={index}>
          {selectedDataIndex === index ? (
            <>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveClick}>Save</button>
            </>
          ) : (
            <>
              <div>{data}</div>
              <button onClick={() => handleEditClick(index)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default UseData;
