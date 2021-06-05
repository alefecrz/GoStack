const express = require('express');
const { uuid } = require('uuidv4');

const PORT = 3333;
const app = express();

app.use(express.json());

const projectList = [];
app.get('/projects', (request, response) => { 
  return response.status(200).json(projectList);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  
  const project = { id: uuid(), title, owner };

  projectList.push(project);
  return response.status(201).json(project);
});

app.listen(PORT, () => console.log("Running in port: ", PORT) );