const express = require('express');

const router = express.Router();

// CONSTANTS

const SUBMISSIONS = [

]

router.get("/", (req, res) => {
    // return the users submissions for this problem
   res.send("get req from submissions")
 });
 
 
 router.post("/", (req, res) => {
    // let the user submit a problem, randomly accept or reject the solution
    // Store the submission in the SUBMISSION array above
   res.send("posted from submissions")
 });

module.exports = router;