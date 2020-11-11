const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongoDB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// catch the error during the connection to MongoDB Atlas
let mongo = mongoose.connection;
mongo.on('error', console.error.bind(console, 'Connection Error:'));
mongo.once('open', () => {
  console.log('Connected to MongoDB...');
});
