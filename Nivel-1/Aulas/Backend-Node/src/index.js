const express = require('express');

const app = express();
const PORT = 3333;

app.get('/', (request, response) => { 
  return response.json({ message: 'Hello World' });
});

app.listen(PORT, () => console.log("Running in port: ", PORT) );