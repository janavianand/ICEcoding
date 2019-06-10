const router = require('express').Router()
const {Companies} = require('../db/models')

//get all table contents
router.get('/view', async (req, res, next) => {
  try {
    const companies = await Companies.findAll()
    res.json(companies)
  } catch (error) {
    next(error)
  }
})
//update route
router.put('/update', async (req, res, next) => {
  try {
    let data = await req.body.map(async i => {
      let company = await Companies.findOne({where: {Id: i.Id}})
      return await company.update(i)
    })
    res.json(data)
  } catch (error) {
    next(error)
  }
})

module.exports = router
