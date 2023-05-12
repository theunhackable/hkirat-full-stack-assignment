const express = require('express');

const router = express.Router();

//  CONSTANTS
const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];

router.get('/', (req, res) => {

    //return the user all the questions in the QUESTIONS array
    res.send("questions");
  })

  module.exports = router