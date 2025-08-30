const express = require("express");
const bodyParser = require("body-parser");
const { logRequest } = require("./midddlewares/logger");
const booksRoutes = require("./Routes/booksController");

const app = express();
app.use(bodyParser.json());
app.use(logRequest);

// Routes
app.use("/books", booksRoutes);

// Server
app.listen(8000, () => {
  console.log(`🚀 Server is running on port 8000`);
});
