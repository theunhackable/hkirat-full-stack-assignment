const express = require('express');
const bodyParser = require('body-parser');
const app = express();



// ROUTES
const adminRouter = require('./routes/admin');
const questionRouter = require('./routes/questions');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const submissionsRouter = require('./routes/submissions');





// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
require('dotenv').config();

// CONSTANTS
const PORT = process.env.PORT || 5000;




// ROUTES
app.use('/admin', adminRouter);
app.use('/submissions', submissionsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter.router);
app.use('/questions', questionRouter);

// ok lets do one thing add seperate routes to diff specific things

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.



app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})