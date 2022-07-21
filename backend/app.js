const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('DB Connected successfully')
);   
//Middlewares
app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static('./assets/images'))

//Product endpoint
const productRouter = require('./routes/product.router');
app.use('/produits',productRouter);

//Client endpoint
const clientRouter = require('./routes/client.router');
app.use('/clients',clientRouter);

//Listening server
app.listen(5000) 