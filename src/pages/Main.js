import React from 'react';
import logo from '../assets/logo.png'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:60px;
`;
const Form = styled.form`
  margin-top:20px;
  width:100%;
  max-width:400px;
  display:flex;
  outline:0;

  input{
    flex:1;
    height:55px;
    padding: 0 20px;
    background:#FFF;
    border:0;
    font-size:18px;
    color:#444;
    outline:0;
  }
  button{
    height:55px;
    padding:0 20px;
    margin-left:10px;
    background:#52B859;
    
    color:#fff;
    font-size:20px;
    font-weight:bold;
    border-radius:3px;
    outline:0;
    &:hover{
      background:#53b890;
    }
  }
`
const Main = () =>(
    <Container>
      <img src={logo} alt="Github Compare"></img>
      <Form>
        <input type="text" placeholder="usuário/repositório"/>
        <button type="submit">+</button>
      </Form>
    </Container>
  
);
export default Main