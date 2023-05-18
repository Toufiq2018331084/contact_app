// import express from 'express';
const express = require("express");
const {getContact, createContact,updateContact,getContactById,deleteContact} = require("../controllers/contactController");
const router = express.Router();

router.get('/',getContact).post('/',createContact);

// router.post('/',createContact);

router.get('/:id',getContactById).put('/:id',updateContact).delete('/:id',deleteContact);

// router.put('/:id',updateContact);

// router.delete('/:id',deleteContact);

module.exports = router;
// default export router;