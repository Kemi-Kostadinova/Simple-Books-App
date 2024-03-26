const router = require("express").Router();

const bookService = require("../services/bookService");

router.get("/", async(req, res) => {
    const books = await bookService.getAll();

    res.json(books);
});

router.post("/", async(req, res) => {
    const bookData = req.body;
    console.log(req.user);
    
    const newBookReview = await bookService.create({ ...bookData, owner: req.user?._id });

    res.json(newBookReview);
});

router.get("/:bookId", async(req, res) => {
    const book = await bookService.getAll();

    res.json(book);
});

router.put("/:bookId", async(req, res) => {
    const bookId = req.params.bookId;
    const currentBook = req.body;

    const book = await bookService.edit(bookId, currentBook);

    res.json(book);
});

router.delete("/:bookId", async(req, res) => {
    const bookId = req.params.bookId;

    await bookService.delte(bookId);

    res.json({ok: true});
});

module.exports = router;