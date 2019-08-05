const express = require('express');
const postsRouter = require('./routes/posts/index');
const commentsRouter = require('./routes/comments/index');
const server = express();
const port = 8300;

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Houston we have lift off!');
})

server.use(postsRouter);
server.use(commentsRouter);

server.listen(port, () => console.log(`.\n*** Server Listing on port ${port} ***\n`));