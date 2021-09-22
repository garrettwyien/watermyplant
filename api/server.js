const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const plantsRouter = require('./plants/plants-router')
const usersRouter = require('./users/users-router')
const { restricted } = require('./auth/auth-middleware')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api/plants', restricted, plantsRouter)
server.use('/api/users', usersRouter)

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = server
