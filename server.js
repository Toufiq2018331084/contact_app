const express = require("express");
const dotenv = require("dotenv").config() ;
// import express from 'express';
const app = express();
app.use("/api/contacts",require("./routes/contactRoutes"));

//const PORT =5000;

app.listen(process.env.PORT, ()=>{
    //console.log(`server started on ${PORT}`);
    console.log(process.env.PORT);
});

