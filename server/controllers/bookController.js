const router = require("express").Router();

const bookService = require("../services/bookService");

router.get("/", async(req, res) => {
    const books = await bookService.getAll();

    res.json(books);
});

router.post("/", async(req, res) => {
    const bookData = req.body;
    
    const newBookReview = await bookService.create(bookData);

    res.json(newBookReview);
});

router.get("/:bookId", async(req, res) => {
    const book = await getOne.getAll();

    res.json(book);
});

router.put("/:bookId", async(req, res) => {
    const bookId = req.params.bookId;
    const currentBook = req.body;

    const book = await getOne.edit(bookId, currentBook);

    res.json(book);
});

module.exports = router;