const commentsRouter = require('express').Router({ mergeParams: true });
const Posts = require('../../data/db');

//GET comments for posts by id
commentsRouter.get('/api/posts/:id/comments', async (req, res) => {
  await Posts.findPostComments(req.params.id)
  .then(post => {
    if (post) {
      res.status(200).json({ success: true, post });
    } else {
      res.status(404).json({ success: false, message: 'The posts with teh specified ID does not exist.' });
    }
  })
  .catch(() => {
    res.status(500).json({ success: false, errorMessage: 'The comments information could not be retrieved.' });
  });
});

//POST 'insert' new comment to post


module.exports = commentsRouter;