const express = require('express');

const USERS = require('../signup').USERS;
const router = express.Router();

router.get('/', (req, res) => {
    // Add logic to decode body
    // body should have email and password
  
    // Check if the user with the given email exists in the USERS array
    // Also ensure that the password is the same
  
  
    // If the password is the same, return back 200 status code to the client
    // Also send back a token (any random string will do for now)
    // If the password is not the same, return back 401 status code to the client
  
  
    res.send('login');
  })

  module.exports = router;
  