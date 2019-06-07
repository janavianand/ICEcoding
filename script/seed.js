'use strict'

const db = require('../server/db')
const {Companies} = require('../server/db/models')

const companies = [
  {
    Id: 100,
    Name: 'ABC Ltd',
    sharePriceDate: '2019-06-05',
    sharePrice: 10.34,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    Id: 101,
    Name: 'DEF Ltd',
    sharePriceDate: '2018-08-12',
    sharePrice: 23.21,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    Id: 145,
    Name: 'REW Ltd',
    sharePriceDate: '2017-04-02',
    sharePrice: 12.34,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    Id: 200,
    Name: 'FED Ltd',
    sharePriceDate: '2015-09-06',
    sharePrice: 9.87,
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    Companies.bulkCreate(companies)
    // User.create({email: 'cody@email.com', password: '123'}),
    // User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${companies.length} companies`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
