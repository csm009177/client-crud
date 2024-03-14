// app\comp\ReadData.tsx
import React, { useContext, useEffect, useState } from "react";
import { DatasContext } from "../context/CRUDContext";

const ReadData: React.FC = () => {
  const [serverData, setServerData] = useState<string[]>([]);
  const { datas, setDatas } = useContext(DatasContext);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/read');
    const data = await response.json();
    setServerData(data);
  };

  useEffect(() => {
    fetchData();
  }, [datas, setDatas]);  // `DatasContext`의 값이 변경될 때마다 `fetchData` 함수를 실행

  return (
    <>
      {serverData.map((data, index) => {
        return <div key={index}>{data.data}</div>; // 'data' 속성을 직접 렌더링
      })}
    </>
  );
};

export default ReadData;