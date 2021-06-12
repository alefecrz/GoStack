import React, { useState, useEffect } from 'react';

import api from './services/api';

import Header from './components/Header';
import './App.css'


const App = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState('');

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response);
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setProject(event.target.value);
  }

  const handleAddproject = () => {
    if (!!project){
      const date = new Date();
      const newProject = `${project + date.getTime()}`
      setProjects([... projects, newProject ]);
    }
  };

  return (
    <>
      <Header title="ADD PROJECTS" />
      <input type="text" value={project} onChange={event => handleChange(event)}/>
      <button onClick={() => handleAddproject()}>adicionar projeto</button>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
    </>
  );
}

export default App;