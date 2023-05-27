const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoutes');
const courseRoute = require('./routes/courseRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();

mongoose
  .connect('mongodb://127.0.0.1:27017/smartedu-db')
  .then(() => console.log('Connected!'));

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
