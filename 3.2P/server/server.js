const express = require('express');
const app = express();
const PORT = 3000;

// Enable CORS (important)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Sample Book Data
const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    description: "A powerful guide to building good habits and breaking bad ones."
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    description: "Learn financial independence and money management."
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    description: "A journey of following your dreams and destiny."
  }
];

// REST API Endpoint
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});