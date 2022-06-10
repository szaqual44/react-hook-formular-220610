
import { Controller, useForm} from 'react-hook-form'
import { InputLabel, NativeSelect } from '@mui/material';

import { useEffect } from 'react';
import { useValidationDropdown } from '../hooks/useValidationDropdown';


export interface MyProps {  
    name:string
    label?:string
  }

export function Dropdown({name, label}: MyProps) {
    const { watch, formState: { errors } } = useForm();
    const err = useValidationDropdown()
    // const dropdown = watch("dropdown")
    // const name = watch("name")
    
    console.log(watch('dropdown'))
    return (
    <>   
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            {label}
        </InputLabel>
        <Controller 
            name={name}
            defaultValue="Apple"         
            render={({ field }) => (
                <NativeSelect {...field}>
                    <option value="Apple">Apple</option>
                    <option value="Banana">Banana</option>
                    <option value="Lemon">Lemon</option>
                </NativeSelect>
            )}
        />    
  
    </>
    
  )
}
