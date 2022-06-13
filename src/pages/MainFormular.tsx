
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import { DataPicker } from "../components/DataPicker"
import { Dropdown } from "../components/Dropdown"
import { InputForm } from "../components/InputForm"
import { useJsonData } from "../services/useJsonData"
import { Button, Formular, Header } from "../styling/styling"



export const MainFormular = () => {
    const {handleSubmit, watch, formState:{errors}, setError} = useFormContext()
    const mySubmit = () => {
        console.log('Success!')
      }




    return (
        <Formular onSubmit={handleSubmit(mySubmit)}>   
        <Header > My Formular</Header>
        <Dropdown name="dropdown" label={"Choose your best fruit"} />
        <InputForm name="name" label={"Write your name"}/> 
        <InputForm data-testid="name" name="login" label={"Write your login"} required/> 
        <DataPicker name="datapicker" label={"Wybierz datę"}/>

        {/* <Button disabled primaryColor={true} >Submit</Button> */}
        <button onClick={()=>setError('login',{type:'custom', message:'something is wrong'})}>buttton</button>
        {errors.login?.message ? <h1 style={{color:"red"}}>lalala</h1> : ''}
      </Formular>  
    )

}