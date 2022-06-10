import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export interface MyProps {  
 
  }

export const useValidationDropdown = () => {
    const {watch, setError} = useForm()
    const [err,setErr] = useState('')
    const dropdown = watch("dropdown")
    const name = watch("name")
  
    
    useEffect(()=>{   
        console.log(dropdown)      
            if (dropdown === 'Lemon') setErr('Nie spełnione kryteria')
            setErr('')  
      },[dropdown])

     return err
}

