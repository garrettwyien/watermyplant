const express = require('express');
const Users = require('./users-model');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const  {validatePayload, checkUsernameFree, createUserObject, tokenBuilder, checkUsernameExists } = require('../auth/auth-middleware');


router.get('/', async (req, res) => {
    res.json(await Users.find())
});
  
router.post('/register', validatePayload, checkUsernameFree, createUserObject, (req, res, next)=>{
    Users.add(req.newUserObj)
        .then(newUser=>{
            res.status(201).json(newUser)
        })
        .catch(next)
});

router.post('/login', validatePayload, checkUsernameExists, (req, res, next) => {
    const { password } = req.body;
    if (bcrypt.compareSync(password, req.user.password)){
      const token = tokenBuilder(req.user)
      res.json({
        message:`welcome, ${req.user.username}`,
        token: token
      })
    } else {
      next({status:401,message:'invalid credentials'})
    }
});

module.exports = router;