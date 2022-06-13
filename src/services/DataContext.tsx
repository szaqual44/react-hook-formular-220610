import * as React from "react";
import { createContext, FC } from "react";
import { DataType } from "../interfaces/interfaces";
import { useJsonData } from "./useJsonData";


export interface DataService{
  findAll: () => Promise<DataType[]>;
  // find: (id:string) => Promise<DataType>
}


export const DataContext = createContext<DataService | null>({} as DataService)




type ChildrenProps = {
  children: React.ReactNode; // 👈️ type children
};

export const DataProvider = (props:ChildrenProps) => {
    return (
      <DataContext.Provider value={useJsonData()}>
        {props.children}
      </DataContext.Provider>
    );
  };