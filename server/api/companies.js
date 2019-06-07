const router = require('express').Router()
const {Companies} = require('../db/models')

router.get('/view', async (req, res, next) => {
  try {
    const companies = await Companies.findAll()
    res.json(companies)
  } catch (error) {
    next(error)
  }
})

module.exports = router
