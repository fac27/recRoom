const db = require('../src/database/db.js')

const delete_post = db.prepare(/*sql/`
DELETE FROM posts where id = $id
`);

const postToDelete = ${postId}

const deletePost = () =>{
return delete_post.run({id: postToDelete});
};