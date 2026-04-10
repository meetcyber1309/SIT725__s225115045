const bookService = require('../services/booksService');

const getAllBooks = (req, res) => {
    try {
        const books = bookService.getAllBooks();
        res.json({ statusCode: 200, data: books, message: "Success" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getBookById = (req, res) => {
    try {
        const book = bookService.getBookById(req.params.id);
        if (book) {
            res.json({ statusCode: 200, data: book, message: "Success" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById
};