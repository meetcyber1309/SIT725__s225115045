const express = require('express');

const app = express();

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello World' });
});

module.exports = app;