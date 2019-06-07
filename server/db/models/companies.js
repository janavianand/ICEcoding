const Sequelize = require('sequelize')
const db = require('../db')

const Companies = db.define('companies', {
  Id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  sharePriceDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sharePrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  comments: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Companies
