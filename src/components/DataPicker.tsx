
import 'antd/dist/antd.css';
import { Controller} from 'react-hook-form'
import { InputLabel } from '@mui/material';
import { DatePicker } from 'antd';


export interface MyProps {  
    name:string
    label?:string
  }

export function DataPicker({name,label}: MyProps) {

    return (
    <>   
       <InputLabel variant="standard" htmlFor="uncontrolled-native">
         {label}
        </InputLabel>
        <Controller 
            name={name}
            // defaultValue="Apple"         
            render={({ field }) => (
                <DatePicker {...field}                         
                />
            )}
        />
    </>
  )
}
