const express = require('express')
const mongoose= require("mongoose");
const app = express()
const bodyParser = require('body-parser');
const cors = require("cors");
const authRouter = require("./Routes/AuthRouter");
const { PositionsModel } = require('./model/PositionsModel');
const cookieParser = require("cookie-parser");

const {HoldingsModel} = require("./model/HoldingsModel");
require('dotenv').config();
// require('./model/db');


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const mongo_url =  process.env.MONGO_URL;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB connected..');
    }).catch((err)=>{
        console.log('MongoDB connection Error:', err);
    })

app.use(bodyParser.json());

const corsConfig = {
  origin: "https://zerodha-dashboard-bice.vercel.app",
  credential: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}
app.options("", cors(corsConfig));
app.use(cors(corsConfig));
app.use('/auth', authRouter)

// fetch data from the data base
app.get('/allHoldings', async(req, res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async(req, res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
