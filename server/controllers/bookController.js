const router = require("express").Router();

const bookService = require("../services/bookService");
const { getErrorMessage } = require("../utils/errorUtils");

router.get("/", async (req, res) => {
  try {
    const books = await bookService.getAll();

    res.json(books);
  } catch (err) {
    res.json({ error: getErrorMessage(err) });
  }
});

router.post("/", async (req, res) => {
  const bookData = req.body;

  try {
    const newBookReview = await bookService.create({
      ...bookData,
      owner: req.user?._id,
    });

    res.json(newBookReview);
  } catch (error) {
    res.json({ error: getErrorMessage(err) });
  }
});

router.get("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const book = await bookService.getOne(bookId);

    res.json(book);
  } catch (err) {
    res.json({ error: getErrorMessage(err) });
  }
});

router.put("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const currentBook = req.body;

  try {
    const book = await bookService.edit(bookId, currentBook);

    res.json(book);
  } catch (err) {
    res.json({ error: getErrorMessage(err) });
  }
});

router.delete("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    await bookService.delte(bookId);

    res.json({ ok: true });
  } catch (err) {
    res.json({ error: getErrorMessage(err) });
  }
});

module.exports = router;
