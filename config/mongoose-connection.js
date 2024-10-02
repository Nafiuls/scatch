const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/scatch')
  .then((result) => {
    console.log('connected');
  })
  .catch((error) => {
    console.log('error connecting', error.message);
  });

module.exports = mongoose.connection;
