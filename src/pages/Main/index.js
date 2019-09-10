import React from 'react';
import logo from '../../assets/logo.png'
import {Container,Form} from './style'

const Main = () =>(
  <Container>
    <img src={logo} alt="Github Compare"></img>
    <Form>
      <input type="text" placeholder="Digite um usuário do Github"/>
      <button type="submit">+</button>
    </Form>
  </Container>

);
export default Main