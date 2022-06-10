import styled from 'styled-components'

export const Formular=styled.form`
max-width:500px;
margin:0 auto;
margin-top:100px;
display:flex;
flex-direction:column;
`


export const Header=styled.h1`
color: black;
font-size:20px;
margin-bottom:30px;
font-weight:400;
`


export const Button = styled.button`
background: ${props =>props.primaryColor ? 'green':'yellow'};
color: white;
text-transform: uppercase;
margin-top: 40px;
padding: 5px;
font-size: 16px;
cursor:pointer;
letter-spacing:2px;
width:100%;
border:none;
`