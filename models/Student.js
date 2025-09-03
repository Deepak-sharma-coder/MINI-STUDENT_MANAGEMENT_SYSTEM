const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    NAME: String,
    EMAIL: String,
    AGE: Number,
    BRANCH: String
})

const StudentModel = mongoose.model("Student", StudentSchema, "Student"); //Here Student is a MongoDB collection name
//here we write second time student because Mongoose automatically convert the collection into  lowercases so we create second time our Collection name 
module.exports = StudentModel; 