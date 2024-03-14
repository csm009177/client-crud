import { createContext, Dispatch, SetStateAction } from "react";

export const DatasContext = createContext<{
  datas: string[];
  setDatas: Dispatch<SetStateAction<string[]>>;
}>({ datas: [], setDatas: () => [] });