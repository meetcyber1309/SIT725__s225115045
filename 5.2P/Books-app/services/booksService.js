const Book = require('../models/bookModel');

// Fetch all books from MongoDB [cite: 24]
const getAllBooks = async () => {
    return await Book.find({});
};

// Fetch a specific book by its ID [cite: 25, 26]
const getBookById = async (id) => {
    return await Book.findOne({ id: id });
};

module.exports = {
    getAllBooks,
    getBookById
};