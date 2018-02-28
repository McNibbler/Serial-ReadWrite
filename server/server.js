const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('../web-client/dist'));

var project = require('./services/app.js');
project(app);
