import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';  //musi byc bo typescipt => przeniesc do pliku konfiguracyjnego
import { debug } from 'console';

xtest('renders header', () => {
  render(<App />);
  const myHeader = screen.getByText(/my formular/i);  
  expect(myHeader).toBeInTheDocument();
});

xtest('renders 3 text boxes', () => {
  render(<App />);
  const inputFields = screen.getAllByRole('textbox');
  expect(inputFields.length).toBe(3);       // 2input fields + 1datapicker
});


//INPUT NAME
xtest('renders input:name', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/write your name/i);
  expect(nameInput).toBeInTheDocument();       
});



test('input:name should be emty', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/write your name/i) as HTMLInputElement;
  expect(nameInput.value).toBe("")
});

// BUTTON 
xtest('renders submit button', () => {
  render(<App />);                                    //     https://www.w3.org/TR/html-aria/#index-aria-textbox
  const button = screen.getByText(/submit/i);      //getByRole('button') nie dziala, gdy zmienię <Button type='submit>
  expect(button).toBeInTheDocument();       
});

xtest('button should be disabled', () => {
  render(<App />);                                   
  const button = screen.getByText(/submit/i);     
  expect(button).toBeDisabled();       
});



// ERROR MESSAGE

