const express = require('express')
const router = express.Router();

const {addQuestion} = require('../controllers/questionController')

router.post('/:id/question',addQuestion)



module.exports = router;