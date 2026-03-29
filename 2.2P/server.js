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