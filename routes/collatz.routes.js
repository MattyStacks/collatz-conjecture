const express = require('express');
const collatz = require('../controllers/collatz');
const router = express.Router();


//Call to get all the users
router.get('/topnumber', collatz.topNumber)

//Show All Numbers
router.get('/allnumbers', collatz.allNumbers);

//Get specific Number back
// router.get('/number/:id', collatz.specificNumInfo)

module.exports = router;