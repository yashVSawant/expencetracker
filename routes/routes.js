const express = require('express');
const path = require('path');

const router = express.Router();

const expenceController = require('../constrollers/expence');

router.get('/get',expenceController.getExpences);
router.get('/post',expenceController.postExpence);
router.get('/delete/:id',expenceController.deleteExpence);
router.get('/get/:id',expenceController.editExpence);

module.exports=router;