# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

Used the following API for JSON server and frontend communication:
"Get a full fake REST API with zero coding in less than 30 seconds (seriously)"
https://github.com/typicode/json-server

NOTE! When "npm run build" remember this:
/services/anecdotes.js
When to Heroku
const baseUrl = '/anecdotes'

When running locally
const baseUrl = 'http://localhost:3000/anecdotes'
Funktio kaikkien anecdoottien hakemiseksi
