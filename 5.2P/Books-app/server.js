const express = require('express');
const app = express();
const bookRoutes = require('./routes/booksRoutes');

app.use(express.static('public'));
app.use('/api/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});