const db = require('../db');

const get_all_posts = db.prepare(`
SELECT 
  p.id AS post_id, 
  p.artist, 
  p.song, 
  u.name AS user_name, 
  p.posted_at
FROM posts AS p
JOIN users AS u ON p.user_id = u.id
ORDER BY p.posted_at DESC
`);

function getAllPosts() {
    return get_all_posts.all();
  }

module.exports = { getAllPosts }