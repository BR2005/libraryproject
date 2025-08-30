let books = [
  { id: 1, title: "Introduction to Cybersecurity" },
  { id: 2, title: "Cybersecurity" }
];

// GET all books
const getBooks = (req, res) => {
  return res.json({ books });
};

// GET book by id
const getBookById = (req, res) => {
  const id = Number(req.params.bookid);
  const book = books.find((e) => e.id === id);
  return res.json({ book });
};

// POST add new book
const addBook = (req, res) => {
  const clientdata = req.body;
  books.push(clientdata);
  res.json({ status: "success" });
};

// DELETE book by id
const deleteBook = (req, res) => {
  const id = Number(req.params.bookid);
  books = books.filter((e) => e.id !== id);
  return res.json({ status: "deleted" });
};

module.exports = {
  getBooks,
  getBookById,
  addBook,
  deleteBook
};
