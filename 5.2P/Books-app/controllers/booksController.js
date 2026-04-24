const bookService = require('../services/booksService');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json({ statusCode: 200, data: books, message: "Success" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        if (book) {
            res.json({ statusCode: 200, data: book, message: "Success" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};