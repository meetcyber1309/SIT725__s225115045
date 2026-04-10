const mongoose = require('mongoose');
const Book = require('../models/bookModel');

// Hardcoded URI as per instructions 
const mongoURI = 'mongodb+srv://meetm51g_db_user:089SVgYw0wiOt442@cluster0091.nkkszsg.mongodb.net/?appName=Cluster0091';

const seedData = [
    { id: "b1", title: "The Three-Body Problem", author: "Liu Cixin", year: 2008, genre: "Science Fiction", summary: "The series portrays a fictional past, present, and future wherein Earth encounters an alien civilization...", price: 29.99 },
    { id: "b2", title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "Classic", summary: "An orphaned governess confronts class, morality, and love at Thornfield Hall...", price: 22.00 },
    { id: "b3", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Classic", summary: "Elizabeth Bennet and Mr. Darcy navigate pride, misjudgement, and social expectations...", price: 22.00 },
    { id: "b4", title: "The English Patient", author: "Michael Ondaatje", year: 1992, genre: "Historical Fiction", summary: "In a ruined Italian villa at the end of WWII, four strangers with intersecting pasts...", price: 25.39 },
    { id: "b5", title: "Small Gods", author: "Terry Pratchett", year: 1992, genre: "Fantasy", summary: "In Omnia, the god Om returns as a tortoise, and novice Brutha must confront dogma...", price: 31.99 }
];

const seedDB = async () => {
    await mongoose.connect(mongoURI);
    await Book.deleteMany({}); // Clear existing data [cite: 18]
    await Book.insertMany(seedData);
    console.log("Database Seeded successfully!");
    process.exit();
};

seedDB();