const postsRouter = require('express').Router({ mergeParams: true });
const Posts = require('../../data/db');

//GET Posts
postsRouter.get('/api/posts', async (req, res) => {
  await Posts.find()
  .then(posts => {
    res.status(200).json({ success: true, posts });
  })
  .catch(() => {
    res.status(500).json({ success: false, errorMessage: 'The posts information could not be retrieved.' })
  });
});

//GET Posts by id TODO


module.exports = postsRouter;