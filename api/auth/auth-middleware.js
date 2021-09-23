const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets");
const bcrypt = require ('bcryptjs');

function validatePayload(req,res,next){
    const { username, password } = req.body;
    if (!username || !password) {
        next({status:422,message:'username and password required'})
    } else {
        next()
    }
};

async function checkUsernameFree(req, res, next) {
    try {
        const usernameFree = await Users.findBy({ username: req.body.username})
        if (!usernameFree.length) {
        next()
        } else {
        next({ status: 422, message: 'username taken'})
        }
    } catch (err) {
    next(err)
}};

function restricted(req,res,next){
    const token = req.headers.authorization;
    if (!token) return next({
        status:401, message:'token required'
    })
    jwt.verify(
        token,
        JWT_SECRET,
        (err, decoded)=>{
            if (err) {
                 next({
                status:401, message:'token invalid'
            })
        } else {
            req.decodeJwt = decoded
            next()
        }
        })
};

function createUserObject(req,res,next){
    const { username, password, phoneNumber } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    const newUserObj = { 
        username: username,
        password: hash,
        phoneNumber: phoneNumber
    };
    req.newUserObj = newUserObj
    next()
}

function tokenBuilder(user){
    const payload ={ 
      subject: user.user_id,
      username: user.username,
      password: user.password
    }
    const options = {
      expiresIn: '1d',
    }
    const token = jwt.sign(payload, JWT_SECRET, options)
    return token
  }


const checkUsernameExists = async (req, res, next) => {
    try {
      const [ usernameExists ] = await Users.findBy({ username: req.body.username})
      if (usernameExists) {
        req.user = usernameExists
        next()
      } else {
        next({ status: 422, message: 'invalid username'})
      }
    } catch (err) {
      next(err)
    }
} 
module.exports = {
    validatePayload,
    checkUsernameFree,
    restricted,
    createUserObject,
    tokenBuilder,
    checkUsernameExists
    };