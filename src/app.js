// src/app.js: Express application setup and middleware configuration

const express = require('express');
const app = express();
app.use(express.json());
app.use('/', require('./routes/schools'));
module.exports = app;
