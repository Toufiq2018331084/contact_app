//@desc get all contacts
//@route GET /api/contacts
//public access

const getContact = (req,res)=>{
    res.status(200).json({message: "start"});
}

const createContact = (req,res)=>{
   console.log(req.body);
   const {name, email, phone}= req.body;
   if(!name || !)
}
const updateContact = (req,res)=>{
    res.status(200).json({message: "update"});
}
const getContactById = (req,res)=>{
    res.status(200).json({message: "get by id"});
}
const deleteContact = (req,res)=>{
    res.status(200).json({message: "delete"});
}

module.exports = {getContact, createContact,updateContact,getContactById,deleteContact};