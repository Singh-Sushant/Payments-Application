const express = require("express");
const app = express();
const mainRouter = require('./routes/index.js')
const cors = require('cors')


app.use(cors())
app.use(express.json())

app.use('/api/v1' , mainRouter)



app.listen(4000 , ()=>{
    console.log("server running on port 4000");
})

