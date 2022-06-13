import { useState } from "react"
import { DataType } from "../interfaces/interfaces"
import {DataService } from './DataContext'


const getURL= (endpoint:string)=> `http://localhost:8000/${endpoint}`


const initial= [
    {
      id: 1,
      name: "Joshua Bloch",
      login: "Effective Java, 2nd Edition"
    },
    {
      id: 2,
      name: "Gavin King",
      login: "Java Persistence With Hibernate"
    }  
  ]

//

export const useJsonData = () =>{
    const [data,setData] = useState<DataType[]>(initial)
    const findAll: DataService["findAll"] = () => {
        return fetch(getURL("mydata"))?.then(response=>response.json()).then(data=>data)
    }

    
    return {
        findAll
    }
}