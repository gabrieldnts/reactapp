import React, {Component } from 'react';
import logo from '../../assets/logo.png'
import api from '../../services/api'
import {Container,Form} from './style'
import CompareList from '../../components/Compare_list'

class Main extends Component{
    state ={
    repositoryInput: '',
    repositories:[
      
    ],
  }
  handleAddRepository = async (e) =>{
    e.preventDefault();

    try{
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        repositoryInput:'',
        repositories: [...this.state.repositories, response.data],
      })
    }
    catch(err){
    }
  }
  render(){
  return(
   
    <Container>
    <img src={logo} alt="Github Compare"></img>
    <Form onSubmit={this.handleAddRepository} >
      <input type="text" 
      placeholder="Digite um usuário do Github"
      value={this.state.repositoryInput}
      onChange = {e => this.setState({repositoryInput: e.target.value})}/>
      <button type="submit">+</button>
    </Form>
    <CompareList repositories={this.state.repositories}/>
  </Container>
  
  )
  }
}
export default Main