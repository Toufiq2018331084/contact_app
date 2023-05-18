const express = require("express");
const dotenv = require("dotenv").config() ;
const errorHandler = require("./middleware/errorHandler");

// import express from 'express';
const app = express();
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);
//const PORT =5000;

app.listen(process.env.PORT, ()=>{
    //console.log(`server started on ${PORT}`);
    console.log(process.env.PORT);
});

