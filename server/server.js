import express from 'express';
import connectDb from './db.js'

const app=express();

app.listen(PORT,()=>{
    console.log(`THe port is running on localhost:${PORT}`,PORT);
})