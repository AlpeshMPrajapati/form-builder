const express = require('express')
const router = express.Router();

const {createForm,getForms,deleteForm,getFormById} = require('../controllers/formController')

router.get('/',getForms);

router.post('/',createForm);

router.delete('/:id',deleteForm)

router.get('/:id',getFormById)




module.exports = router;