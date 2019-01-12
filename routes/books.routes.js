const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books.controller');

router.get('/', booksController.list)
router.get('/create', booksController.create)

router.post('/create', booksController.doCreate)

router.get('/:id', booksController.get)
router.get('/:id/edit', booksController.edit)
router.post('/:id/edit', booksController.doEdit)
router.post('/:id/delete', booksController.delete)

module.exports = router;
