const express = require('express');
const { home, board } = require('./template');
const {getUsers} = require('../../model/getNames')
const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send(home());
});

// const users = [
//   'Taha',
//   'Mark',
//   'Cameo',
//   'Zak',
//   'Simon',
//   'Beth',
//   'Alphonso',
//   'Thom',
// ];
const users = getUsers();
console.log(users)

server.get('/board/:name', (req, res) => {
  const name = req.params.name;
  if (users.includes(name)) {
    res.send(board(name));
  } else {
    res.redirect('/');
  }
});

server.post('/post', (req, res) => {
  res.redirect('/board');
});

module.exports = server;
