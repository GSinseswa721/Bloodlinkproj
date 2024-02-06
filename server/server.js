require('dotenv').config();
// server.js
const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const colors = require('colors');
const allRoutes = require('./routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// dotenv.config();



const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/BloodLink';


var corsOptions = {
  origin: ['http://localhost:5173', 'http://192.168.196.82:5273', 'http://localhost:5173', 'http://127.0.0.1:5273'],
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());


mongoose



  .connect('mongodb://127.0.0.1:27017/BloodLink')


  .then(() => {
    app.use('/api/BL/v1/', allRoutes);

    app.listen(PORT, () => {
      console.log(`> Listening on port ${PORT}`.bgMagenta.white);
    });
  })
  .catch((err) => console.error("> Couldn't connect to MongoDB...".bgRed, err));
