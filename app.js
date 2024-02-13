const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 7000 || process.env.PORT;

require('dotenv/config');
// const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
app.use(cors());
app.options('*', cors())




//middleware
app.use(express.json());
app.use(morgan('tiny'));
// app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

const url = process.env.MONGO_URL;
mongoose.connect(url).then(() => {
    console.log('mongodb server started');
})


const usersRoutes = require('./routes/users');

const api = process.env.API_URL;

app.use(`${api}/users`, usersRoutes);

//Database
//mongoose.connect(process.env.CONNECTION_STRING)
//.then(()=>{
  //  console.log('Database Connection is ready...')
//})
//.catch((err)=> {
  //  console.log(err);
//})



app.listen(7000, ()=>{

    console.log('server is running http://localhost:7000');
})
console.log('dfjkjmvfcdxcvml');