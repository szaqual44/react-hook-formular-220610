import {useForm,  FormProvider} from 'react-hook-form'
import { InputForm } from './components/InputForm';
import {Formular, Header, Button, ErrorMessage} from './styling/styling'
import './styling/App.css'
import { Dropdown } from './components/Dropdown';
import { DataPicker } from './components/DataPicker';
import { useEffect } from 'react';
import {useQuery}  from 'react-query'
import { MainFormular } from './pages/MainFormular';
import { DataProvider } from './services/DataContext';
import { DataOverwiev } from './pages/DataOverview';

function App() {
 
  const methods = useForm({
    defaultValues:{
      name:"",
      login:''
    }
  })

 

  return (
    <DataProvider>
      <FormProvider {...methods} >
          <MainFormular/>    
          <DataOverwiev/>      
      </FormProvider>
    </DataProvider>
  );
}
export default App;



