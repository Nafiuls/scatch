const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

// database models
const userModel = require('./models/user-model');
const productModel = require('./models/product-model');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
dotenv.config();

app.get('/', (req, res) => {
  res.send('the server is running');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
