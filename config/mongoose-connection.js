const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');
const config = require('config');
mongoose
  .connect(`${config.get('MONGODB_URI')}/scatch`)
  .then((result) => {
    console.log('connected');
  })
  .catch((error) => {
    console.log('error connecting', error.message);
  });

module.exports = mongoose.connection;
