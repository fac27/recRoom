const express = require('express');
const { home, board } = require('template.js');
const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
    res.send(home());
  });

const users = ['Taha', 'Mark', 'Cameo', 'Zak', 'Simon', 'Beth', 'Alphonso', 'Thom']

server.get('/board/:name', (req, res) => {
  const name = req.params.name;
  if (users.includes(name)){
    res.send(board(name));
  }
  else {
    res.redirect('/');
  }
})

server.post('/post', (req, res) => {
  res.redirect('/board')
})

  module.exports = server;