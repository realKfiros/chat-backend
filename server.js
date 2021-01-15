require('dotenv').config();
const { mongodb } = require('./config/mongoose');
const { redisClient } = require('./config/redis');

mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.once('open', () => {
  console.log('Connected to MongoDB!');
});

redisClient.on('error', console.error.bind(console, 'connection error:'));
redisClient.once('connect', () => {
  console.log('Connected to Redis!');
});
