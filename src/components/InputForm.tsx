import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ExtendProps } from '../interfaces/interfaces'; 

export function InputForm({label,required,name}: ExtendProps, ) {
    return (
    <>   
        <Controller
        name={name}
        defaultValue=""
        render={({field}) => (
            <TextField {...field} label={label} variant="outlined" margin="normal" required={required}/>
        )}
        />  
    </>
  )
}


//nie uzywac label={label}
