const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  fullname: String,
  password: string,
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model('user', userSchema);
