'use strict'

import http from 'http';
import express from 'express';
const debug = require('debug')('nodestr:server');

const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    })
});
app.use('/', route);

server.listen(port);
console.log('API executando na porta ' + port);