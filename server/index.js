const express = require('express');
const dotenv = require('dotenv')
const Connection  = require('./database/db.js')
const cookieParser = require('cookie-parser')
const app = express();


dotenv.config()
const routes = require('./routes/authRoute.js')
Connection();

app.use(express.json())
app.use(cookieParser())
app.use('/',routes)

app.listen(5000,()=>console.log('Server is listening on port 5000'))