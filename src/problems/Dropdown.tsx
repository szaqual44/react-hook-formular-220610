
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import React from 'react'

export interface MyProps {
  
    name:string
    title:string
  }

export function Dropdown({name, title}: MyProps) {
    const [option, setOption] = React.useState('1');
    
    const handleChange = (event: SelectChangeEvent) => {
        setOption(event.target.value as string);
      };
    return (
    <>   
        <Controller
        name={name}
        defaultValue="A"
        render={({field}) => (
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select         
                    labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    value={option}
                    label={title}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>A</MenuItem>
                    <MenuItem value={2}>B</MenuItem>
                    <MenuItem value={3}>C</MenuItem>
                </Select>
            </FormControl>
        )}
        />  
    </>
  )
}
