const express = require('express');
const app = express();
const port = 3000;

// PART 1: Serving static files from the 'public' folder
app.use(express.static('public'));

// Basic endpoint to check if the server is alive
app.get('/', (req, res) => {
    res.send('Server is running . Go to /index.html for the calculator.');
});

// PART 2: Calculator Web Service
app.get("/addTwoNumbers", (req, res) => {
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