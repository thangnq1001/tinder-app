# Tinder App backend

## Steps to run the app
1. `npm install` to install dependencies
2. `npm start` to run the app

## Database setup
1. Install PostgreSQL and initialize/configure stuff following information used in [queries.js](queries.js) 
2. Run [migration/v1_tinder_app.sql](migration/v1_tinder_app.sql)
- This should be done using some migration library (knex,...). I made it simple as the time was limited.

## Technologies used
- Nodejs 14
- Express 4.17.1
- PostgreSQL 12
- node-postgres 8.6
