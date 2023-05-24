const express = require("express");
const { getAllPosts, createPost } = require("../database/model/posts");
const { home, board } = require("./template");
const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.send(home());
});

const users = [
  "taha",
  "mark",
  "cameo",
  "zak",
  "simon",
  "beth",
  "alphonso",
  "thom",
];

server.get("/board/:name", async (req, res) => {
  const name = req.params.name;
  if (users.includes(name)) {
    const posts = await getAllPosts();
    res.send(board(name, posts));
  } else {
    res.redirect("/");
  }
});

server.post(
  "/post",
  express.urlencoded({ extended: false }),
  async (req, res) => {
    const { user_id, artist, song, spotify_url } = req.body;
    console.log(`Adding recommendation by ${user_id} (${song} by ${artist})`);

    const post_id = await createPost({ user_id, artist, song, spotify_url });

    if (post_id) {
      res.status(201).send({
        message: `Post created with id: ${post_id}`,
        redirect: "/",
      });
    } else {
      res.status(400).send({
        message: `Error creating post`,
        redirect: "/" });
    }
  }
);

module.exports = server;
