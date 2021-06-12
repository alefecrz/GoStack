import React, { useState, useEffect } from 'react';

import api from './services/api';

import Header from './components/Header';
import './App.css'


const App = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await api.get('/projects');
        const { data } = response;
        setProjects(data);
      } catch (error) {
        console.log(error)
      }
    }
    getProjects();
  }, []);

  const handleAddproject = async () => {
    if (!!title && !!owner){
      const response = await api.post('/projects', { title, owner })
      const { data } = response;
      setProjects([...projects , data]);
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