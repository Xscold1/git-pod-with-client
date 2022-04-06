const userController = require('../controllers/user/user')
const express = require('express');
const router = express.Router()

router.post('/user/acceptInput' ,userController.insertDatatoDatabase)


module.exports = router