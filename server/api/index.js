const router = require('express').Router()
module.exports = router

//companies routes
router.use('/', require('./companies'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
