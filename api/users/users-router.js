const express = require('express');
const Users = require('./users-model');
const router = express.Router();
const { JWT_SECRET } = require('../secrets/index');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const  {validatePayload, checkUsernameFree, createUserObject, restricted } = require('../auth/auth-middleware');


router.get('/', async (req, res) => {
    res.json(await Users.find())
})
  
router.post('/register', validatePayload, checkUsernameFree, createUserObject, (req, res, next)=>{
    Users.add(req.newUserObj)
        .then(newUser=>{
            res.status(201).json(newUser)
        })
        .catch(next)
})

module.exports = router;