import { TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

export interface MyProps {
    label: string
    required?: boolean
    name:string
  }

export function InputForm({label,required, name}: MyProps) {
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
