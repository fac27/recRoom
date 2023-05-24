const express = require('express');
const { getAllPosts } = require('../database/model/posts');
const { home, board } = require('./template');
const {getUsers} = require('../../model/getNames')
const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send(home());
});


const users = getUsers();

server.get('/board/:name', async (req, res) => {
  const name = req.params.name;
  if (users.includes(name)) {
    const posts = await getAllPosts();
    res.send(board(name, posts));
  } else {
    res.redirect('/');
  }
});

server.get('/test/', async (req, res) => {
  const posts = await getAllPosts();
  console.log(posts)
});

server.post('/post', (req, res) => {
  res.redirect('/board');
});

module.exports = server;
