const express = require('express');
const { add } = require('./math');

const app = express();
const PORT = 3000;

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    try {
        const result = add(a, b);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});