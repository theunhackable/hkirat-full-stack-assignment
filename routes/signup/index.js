const express = require('express');

const router = express.Router();

// CONSTANTS
const USERS = [];


router.get('/', (req, res) => {
  res.send('signup re');
});

router.post('/', (req, res) => {
    // Add logic to decode body
    // body should have email and password
  
  
    //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)
  
  
    // return back 200 status code to the client
    res.send('Hello World!')
  })

module.exports = {router, USERS};