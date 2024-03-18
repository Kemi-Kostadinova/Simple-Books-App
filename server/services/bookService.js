const Book = require("../models/Book");

exports.getAll = () => Book.find();

exports.getOne = (bookId) => Book.findById(bookId);

exports.create = (review) => Book.create(review);

exports.edit = (bookId, book) => Book.findByIdAndUpdate(bookId, book);
