const express = require('express');
const { uuid } = require('uuidv4');

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(logRequest);
app.use('/projects/:id', projectIdExists);

function logRequest(request, response, next) {
  const { method, url } = request;
  
  const logRequenst = `[${method.toUpperCase()}] ${url}`;
  
  console.time(logRequenst);
  next();
  console.timeEnd(logRequenst);
}

function projectIdExists(request, response, next) {
  const { id } = request.params;
  const projectIndex = projectList.find(project => project.id === id);
  if (!projectIndex)
    return response.status(400).json({ error: "Project not found."})
  return next();
}

const projectList = [];
app.get('/projects', (request, response) => { 
  const { title, owner} = request.query;
  const results = ( title || owner ) 
    ? projectList.filter(project => project.title.includes(title) || project.owner.includes(owner)) 
    : projectList;

  return response.status(200).json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  
  const project = { id: uuid(), title, owner };

  projectList.push(project);
  return response.status(201).json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projectList.findIndex(project => project.id === id)

  const project = { id, title, owner };

  projectList[projectIndex] = project;

  return response.status(201).json(projectList);
});

app.listen(PORT, () => console.log("Running in port: ", PORT) );