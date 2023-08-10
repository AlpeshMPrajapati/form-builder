const express = require('express')
const app = express();
const cors = require('cors')
const port=8000;


app.use(cors());
app.use(express.json())

//import routes
const formRouter = require('./routes/formRouter')
const questionRouter = require('./routes/questionRouter')


//mount the api routes
app.use('/api/forms',formRouter);
app.use('/api/questions',questionRouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})

//connect to DB
const dbConnect  = require('./config/database')
dbConnect();
