require('dotenv').config();
const express = require('express');

const app = require('./app');

const routes = require('./routes');

app.use(express.json);

app.use('/login', routes.login);
app.use('/user', routes.user);
app.use('/post', routes.post);
app.use('/categories', routes.categories);

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
