import { useEffect} from "react";
import { useFormContext } from "react-hook-form";

export interface MyProps {  
 
  }

export const useValidationDropdown = () => {
    const {watch, setError} = useFormContext()
    watch('dropdown')
    const dropdown = watch("dropdown")
    const name = watch("name")
    console.log('dropdown ',dropdown)
    console.log('name ',name)
    console.log('sdsdsdds')
    
    useEffect(()=>{   
                     
            if (1) setError('customError',{type:'custom', message: 'Nie spełnione kryteria'})
            else setError('customError',{type:'custom', message: ''})
      },[])
    //   console.log(errors) 

     return 
}

