import React, { Component } from 'react'
import {Container,Repository} from './style'
import PropTypes from 'prop-types'

const CompareList = ({repositories, removeRepository, updateRepository}) => {
    return (
      <Container>
        {repositories.map(repository =>(
          <Repository key={repository.id}>
  
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
            <div>
            <i alt="Deletar" className="fa fa-trash"onClick={() => removeRepository(repository.id)}/>
            <i alt="Atualizar"className="fa fa-refresh" onClick={() => updateRepository(`${repository.owner.login}/${repository.name}`)}/>
            </div>
          </header>
          <ul>
            <li>
              {repository.stargazers_count}<small> stars <i className="fa fa-star"/></small>
            </li>
          </ul>
          <ul>
            <li>
              {repository.forks_count}<small> forks</small>
            </li>
          </ul>
          <ul>
            <li>
              {repository.open_issues_count}<small> issues</small>
            </li>
          </ul> 
          <ul>
            <li>
              {repository.lastCommit}<small> last commit</small>
            </li>
          </ul>
        </Repository>
        ))}
      </Container>
    );
  }
    CompareList.propTypes = {
      repositories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        owner:PropTypes.shape({
          login:PropTypes.string,
          avatar_url:PropTypes.string,
        }),
        stargazers_count:PropTypes.number,
        forks_count: PropTypes.number,
        open_issues_count:PropTypes.number,
        pushed_at:PropTypes.string
      })).isRequired,
    };
 export default CompareList