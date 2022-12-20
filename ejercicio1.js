const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`Request at ${req.baseUrl} ${Date.now()}`);
    next();
});

app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'Este quest/response esta OK'
    });
});

app.listen(4004);
