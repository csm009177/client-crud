// app\comp\DeleteData.tsx
import React, { useContext } from "react";
import { DatasContext } from "../context/CRUDContext";

const DeleteData: React.FC = () => {
  const { datas, setDatas } = useContext(DatasContext);

  // 선택한 데이터를 삭제하는 함수
  const handleDelete = (index: number) => {
    const updatedDatas = datas.filter((_, i) => i !== index);
    setDatas(updatedDatas);
  };

  return (
    <>
      {datas.map((data, index) => (
        <div key={index}>
          <span>{data}</span>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default DeleteData;
