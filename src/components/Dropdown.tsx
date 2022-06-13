import { Controller, useForm, useFormContext} from 'react-hook-form'
import { InputLabel, NativeSelect } from '@mui/material';
import { BaseProps } from '../interfaces/interfaces'; 


export function Dropdown({name, label}: BaseProps) {
    const {watch } = useFormContext() 
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
        {`${watch('dropdown')}`} 
  
    </>
    
  )
}



//resty na react-query