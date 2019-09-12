import React, {Component } from 'react';
import logo from '../../assets/logo.png'
import api from '../../services/api'
import moment from 'moment'
import SweetAlert from 'sweetalert2-react'
import {Container,Form} from './style'
import CompareList from '../../components/Compare_list'

class Main extends Component{
    state ={
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories:[
      
    ],
  }
  handleAddRepository = async (e) =>{
    e.preventDefault();

    this.setState({loading:true});
    try{
      const {data: repository} = await api.get(`/repos/${this.state.repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput:'',
        repositories: [...this.state.repositories, repository],
        repositoryError:false,
      })
    }
    catch(err){
      this.setState({repositoryError : true})
    }
    finally{
      this.setState({loading:false});
    }
  }
  render(){
  return(
   
    <Container>
    <img src={logo} alt="Github Compare"></img>
    <Form  searchError={this.state.repositoryError} onSubmit={this.handleAddRepository} >
      <input type="text" 
      placeholder="Procurar repositório"
      value={this.state.repositoryInput}
      onChange = {e => this.setState({repositoryInput: e.target.value})}/>
      <button type="submit">{this.state.loading ? <i className = "fa fa-spinner fa-pulse"/> : <p>+</p>}</button>
      <SweetAlert
        show={this.state.repositoryError}
        title="Ops!"
        text="Repositório não encontrado :("
        onConfirm={() => this.setState({ repositoryError: false })}
      />
    </Form>
    <CompareList repositories={this.state.repositories}/>
  </Container>
  
  )
  }
}
export default Main