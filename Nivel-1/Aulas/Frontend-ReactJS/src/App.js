import React, { useState, useEffect } from 'react';

import api from './services/api';

import Header from './components/Header';
import './App.css'


const App = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  useEffect(() => {
    api.get('/projects').then(response => {
      const { data } = response;
      setProjects(data);
    });
  }, []);

  const handleAddproject = () => {
    if (!!title && !!owner){
      api.post('/projects', { title, owner }).then( response => {
        const { data } = response;
        setProjects([...projects , data]);
      })
    }
  };

  return (
    <>
      <Header title="ADD PROJECTS" />
      <form>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)}/>
        <br/>
        <input type="text" value={owner} onChange={event => setOwner(event.target.value)}/>
      </form>
      <button onClick={() => handleAddproject()}>adicionar projeto</button>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title} {project.owner}</li>)}
      </ul>
    </>
  );
}

export default App;