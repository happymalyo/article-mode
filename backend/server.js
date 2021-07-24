const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
  
//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection etablished successfully');
});
//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/services');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/services', servicesRouter);

app.get('/', (req, res) => {
  res.send('Hey all');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});