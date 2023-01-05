const express = require('express');
const app = express();

const TokenRedisController = require('./controller/TokenRedisController');
const tokenRedisController = new TokenRedisController();

app.get('/getToken', tokenRedisController.getToken);

app.use(express.json());

module.exports = app;