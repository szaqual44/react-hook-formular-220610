import { useEffect, useState } from "react";
import { DataType } from "../interfaces/interfaces";
import { useJsonData } from "../services/useJsonData";


export const DataOverwiev = () =>{

    const [data,setData] =useState<DataType[]>([])  
    const {findAll}   =useJsonData()
    useEffect(() => {
      findAll().then((allData: DataType[]) => {
        setData(allData)
      })
    }, []);
    return(
        <>
            <h1>{data[2]?.name}</h1>
        </>
    )
}