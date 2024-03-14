"use client";

import React, { useEffect, useState } from "react";
import CreateData from './comp/CreateData';
import { DatasContext } from './context/CRUDContext';


export default function Home() {
  const [datas, setDatas] = useState<string[]>([]);
  // API 서버로부터 데이터를 가져오는 함수
  return (
    <main>
      <DatasContext.Provider value={{datas, setDatas}}>
        <CreateData/>
      </DatasContext.Provider>
    </main>
  );
}
