const express = require('express');

const server = express();

const helmet = require('helmet');

// const router = require(' '); 

//
server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`
        <h1>Api Portal</h1>
    `)
})

// server.use('/api/dishes');

module.exports = server; 