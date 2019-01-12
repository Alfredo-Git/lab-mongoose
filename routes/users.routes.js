const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/', usersController.list)
router.get('/create', usersController.create)

router.post('/create', usersController.doCreate)

router.get('/:id', usersController.get)
router.post('/:id/delete', usersController.delete)


module.exports = router;