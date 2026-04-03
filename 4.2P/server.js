const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); 

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // 👈 added - serves your HTML

mongoose.set("strictQuery", true); 

const MONGO_URI = "mongodb+srv://cybermeet21_db_user:pRfstaFJzOhsXWVR@cluster0.sxhiu4h.mongodb.net/bookLibraryDB"; // 👈 added database name

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas!"))
  .catch((err) => console.error("❌ Connection failed:", err));

const bookSchema = new mongoose.Schema({
  title:         { type: String, required: true },
  author:        { type: String, required: true },
  genre:         { type: String, required: true },
  yearPublished: { type: Number, required: true },
  rating:        { type: Number, min: 1, max: 5 },
  available:     { type: Boolean, default: true }
});

const Book = mongoose.model("Book", bookSchema);

app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post("/api/books", async (req, res) => {
  const newBook = new Book(req.body);
  const saved = await newBook.save();
  res.status(201).json(saved);
});

app.delete("/api/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted!" });
});

app.get("/", (req, res) => {
  res.send("Server is running and DB is connected!");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});