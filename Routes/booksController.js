const express = require("express");
const router = express.Router();
const {
  getBooks,
  getBookById,
  addBook,
  deleteBook
} = require("../controllers/booksController");

// Routes
router.get("/", getBooks);
router.get("/:bookid", getBookById);
router.post("/", addBook);
router.delete("/:bookid", deleteBook);

module.exports = router;
