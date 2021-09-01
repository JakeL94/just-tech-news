const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title: 'Post1',
    post_url: 'This is post 1',
    user_id: 1
  },
  {
    id: 2,
    title: 'Post2',
    post_url: 'This is post 2',
    user_id: 2,
  },
  {
    id: 3,
    title: 'Post3',
    post_url: 'This is post 3',
    user_id: 3,
  },
  {
    id: 4,
    title: 'Post4',
    post_url: 'This is post 4',
    user_id: 4,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;