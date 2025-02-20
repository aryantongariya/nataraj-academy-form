require('dotenv').config();
const connectToMongo = require('./db');
// import connectToMongo from "./db";
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
const path = require('path')
const express = require('express')
var cors = require('cors')

  const host = "https://nataraj-academy-form.onrender.com";
  // const host =  "http://localhost:3000";

connectToMongo();
const app = express()
const PORT = process.env.PORT


const _dirname = path.resolve();

const corsOptions ={
  origin:`${host}`,
  credentials:true
}

// dotenv.config()
app.use(cors(corsOptions))
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.use(express.static(path.join(_dirname, "./Frontend/build")))

app.get('*', (_, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "build", "index.html"))
})
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`Registraion form app listening at http://localhost:${PORT}`)
})