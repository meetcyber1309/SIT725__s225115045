
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/addTwoNumbers", (req, res) => {
    // We use req.query to get values from the URL
    const n1 = parseInt(req.query.number1);
    const n2 = parseInt(req.query.number2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({status: 400, message: "Invalid numbers"});
    }

    res.json({status: 200, data: n1 + n2});
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static('public'));

// Basic endpoint
app.get('/', (req, res) => {
    res.send('Server is running 🚀');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

