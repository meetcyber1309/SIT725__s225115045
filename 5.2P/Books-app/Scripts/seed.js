const mongoose = require('mongoose');
const Book = require('../models/bookModel');

const mongoURI = "mongodb+srv://cybermeet21_db_user:pRfstaFJzOhsXWVR@cluster0.sxhiu4h.mongodb.net/bookLibraryDB?retryWrites=true&w=majority";

const seedData = [
    { id: "b1", title: "The Three-Body Problem", author: "Liu Cixin", year: 2008, genre: "Science Fiction", summary: "...", price: 29.99 },
    { id: "b2", title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "Classic", summary: "...", price: 22.00 },
    { id: "b3", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Classic", summary: "...", price: 22.00 },
    { id: "b4", title: "The English Patient", author: "Michael Ondaatje", year: 1992, genre: "Historical Fiction", summary: "...", price: 25.39 },
    { id: "b5", title: "Small Gods", author: "Terry Pratchett", year: 1992, genre: "Fantasy", summary: "...", price: 31.99 }
];

const seedDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        await Book.deleteMany({}); // Clears existing cloud data 
        await Book.insertMany(seedData);
        console.log("Atlas Database Seeded successfully!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();