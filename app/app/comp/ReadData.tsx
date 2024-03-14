// app\comp\ReadData.tsx
import React, { useContext } from "react";
import { DatasContext } from "../context/CRUDContext";

const ReadData: React.FC = () => {
  const { datas } = useContext(DatasContext);

  return (
    <>
      {datas.map((data, index) => {
        return <div key={index}>{data}</div>;
      })}
    </>
  );
};

export default ReadData;
