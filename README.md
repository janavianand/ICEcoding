This app is built based on the stack -

Frontend

1.  ReactJS
2.  Redux
    Backend
3.  NodeJS
4.  ExpressJS
    Database
5.  PostgreSQL
6.  Sequelize - ORM

To run the webapp,

1.  npm i
2.  createdb iceCompanies
3.  npm run seed - (seed the database)
4.  npm run start-dev (To start the server)

Run the app at http://localhost:8080/

To update the table, use the sample.csv, as an example format. To view the updated table go to View tab.

Directory Structure:

Frontend - /client
React components - /client/components
Redux store - /client/store
Backend - /server
Api Routes = /server/api
Database - /server/db
