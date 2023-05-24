const db = require('../src/database/db.js')

const deletePost = (postId) =>{
    return delete_post.run({id: postId});
};

// example of what it *could* look like on server side? 
server.post('/delete/:post', (req, res) => {
    const { postId } = req.params;
    const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
        deletePost(postId);
        posts.splice(index, 1);
        savePosts(posts);
    res.redirect('/');}
  });

