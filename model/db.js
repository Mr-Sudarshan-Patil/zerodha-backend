// database connection

const mongoose = require('mongoose');

const mongo_url =  process.env.MONGO_URL;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB connected..');
    }).catch((err)=>{
        console.log('MongoDB connection Error:', err);
    })