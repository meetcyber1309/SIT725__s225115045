const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require('./routes/booksRoutes');

const mongoURI = 'mongodb+srv://meetm51g_db_user:089SVgYw0wiOt442@cluster0091.nkkszsg.mongodb.net/?appName=Cluster0091'; // 

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.static('public'));
app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));