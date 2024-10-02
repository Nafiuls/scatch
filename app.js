const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

// mongoose connection
const connection = require('./config/mongoose-connection');

// database models
const userModel = require('./models/user-model');
const productModel = require('./models/product-model');

// api routes
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
