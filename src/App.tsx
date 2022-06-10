import {useForm,  FormProvider} from 'react-hook-form'
import { InputForm } from './components/InputForm';
import {Formular, Header, Button} from './styling/styling'
import './styling/App.css'

import { Dropdown } from './components/Dropdown';
import { DataPicker } from './components/DataPicker';

function App() {
  const methods = useForm()
  const {watch, handleSubmit} = methods

  const mySubmit = () => {
    console.log('Success!')
  }
  console.log(watch())

  return (
    <FormProvider {...methods} >
      <Formular onSubmit={handleSubmit(mySubmit)}>   
        <Header> My Formular</Header>
        <Dropdown name="dropdown" label={"Choose your best fruit"} />
        <InputForm name="name" label={"Write your name"}/> 
        <InputForm name="login" label={"Write your login"} required/> 
        <DataPicker name="datapicker" label={"Wybierz datę"}/>
        
        <Button primaryColor={true} >Submit</Button>
      </Formular>  
    </FormProvider>
  );
}
export default App;



