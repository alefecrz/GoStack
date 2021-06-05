const express = require('express');

const app = express();
const PORT = 3333;


const projects = [];
app.get('/projects', (request, response) => { 
  return response.status(200).json(projects);
});

app.listen(PORT, () => console.log("Running in port: ", PORT) );