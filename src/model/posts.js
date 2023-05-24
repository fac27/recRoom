const db = require("../database/db");

const get_all_posts = db.prepare(/*sql*/`
SELECT 
  p.id AS post_id, 
  p.artist, 
  p.song,
  p.spotify_url,
  u.name AS user_name, 
  p.posted_at
FROM posts AS p
JOIN users AS u ON p.user_id = u.id
ORDER BY p.posted_at DESC
`);

function getAllPosts() {
  return get_all_posts.all();
}

const create_post = db.prepare(/*sql*/`
  INSERT INTO posts (
    user_id,
    artist,
    song,
    spotify_url)
  VALUES (
    $user_id,
    $artist,
    $song,
    $spotify_url)
  RETURNING id
  `);

function createPost({user_id, artist, song, spotify_url}) {
  return create_post.get({ user_id, artist, song, spotify_url });
}

module.exports = { getAllPosts, createPost };
