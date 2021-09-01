const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'User1',
    email: 'User1@yu.tu',
    password: 'Secret',
  },
  {
    id: 2,
    username: 'User2',
    email: 'User2@yu.tu',
    password: 'Secret2',
  },
  {
    id: 3,
    username: 'User3',
    email: 'User3@yu.tu',
    password: 'Secret3',
  },
  {
    id: 4,
    username: 'User4',
    email: 'User4@yu.tu',
    password: 'Secret4',
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;