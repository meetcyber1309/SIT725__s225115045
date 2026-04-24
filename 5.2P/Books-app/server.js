const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require('./routes/booksRoute');

// Your Atlas Connection String
const mongoURI = "mongodb+srv://cybermeet21_db_user:pRfstaFJzOhsXWVR@cluster0.sxhiu4h.mongodb.net/bookLibraryDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas (bookLibraryDB)...'))
    .catch(err => console.error('Atlas Connection Error:', err));

app.use(express.static('public'));
app.use(express.json());
app.use('/api/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});