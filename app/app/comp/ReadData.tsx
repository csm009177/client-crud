// app\comp\ReadData.tsx
import React, { useContext, useEffect, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

const ReadData: React.FC = () => {
  const [serverData, setServerData] = useState<string[]>([]);
  const { datas } = useContext(DatasContext);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/read');
    const data = await response.json();
    setServerData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {serverData.map((data, index) => {
        return <div key={index}>{data.data}</div>; // 'data' 속성을 직접 렌더링
      })}
    </>
  );
};

export default ReadData;