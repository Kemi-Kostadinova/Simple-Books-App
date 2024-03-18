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

module.exports = router;