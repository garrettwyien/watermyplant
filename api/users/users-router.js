const express = require('express');
const Users = require('./users-model');
const router = express.Router();


router.get('/', async (req, res) => {
    res.json(await Users.get())
})
  
router.post('/', async (req, res) => {
    res.status(201).json(await Users.add(req.body))
})


module.exports = router;