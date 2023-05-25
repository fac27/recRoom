const express = require('express');
const server = express();

const { getAllPosts } = require('../model/posts');
const { getUsers } = require('../model/users');
const { home, board } = require('./template');

server.use(express.static('public'));

const users = getUsers();

server.get('/', (req, res) => {
  res.send(home());
});

server.post('/', express.urlencoded({ extended: true }), (req, res) => {
  const { name } = req.body;

  if (users.includes(name)) {
    res.send(board(name, getAllPosts()));
  } else {
    res.redirect('/');
  }
});


module.exports = server;

