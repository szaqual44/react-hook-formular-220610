
import 'antd/dist/antd.css';
import { Controller} from 'react-hook-form'
import { InputLabel } from '@mui/material';
import { DatePicker } from 'antd';
import { BaseProps } from '../interfaces/interfaces'
import moment from "moment";


export function DataPicker({name,label}: BaseProps) {
    return (
    <>   
       <InputLabel variant="standard" htmlFor="uncontrolled-native">
         {label}
        </InputLabel>
        <Controller 
            name={name}  
            defaultValue={moment(moment().format('YYYY-MM-DD'))}                
            render={({ field }) => (
                <DatePicker {...field}                      
            />
          
            )}
        />

    </>
  )
}
