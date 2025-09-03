const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//require the Student.js file 
const StudentModel = require('./models/Student')

const app = express();
app.use(cors())
app.use(express.json())

//connect to the Database 
mongoose.connect('mongodb://127.0.0.1:27017/Crud')
//Define Port 
const port = 8080;

//create the Router for add new students
app.post('/CreateStudent', (req,res) =>{
    StudentModel.create(req.body)
    .then(Student => res.json(Student))
    .catch(err => res.json(err))
})

//Create a route for get new Data
app.get('/', (req,res) =>{
    StudentModel.find({})
    .then(Student => res.json(Student))
    .catch(err => res.json(err))
})

//To get the Student by id
app.get('/getStudent/:id', (req,res) =>{
    const id = req.params.id; 
    StudentModel.findById({_id: id})
    .then(Student => res.json(Student))
    .catch(err => res.json(err))
})

//To update the student by it's id so we used the put method to update
app.put('/updateStudent/:id', (req,res) =>{
    const id = req.params.id;
    StudentModel.findByIdAndUpdate({_id: id}, {
        //We create this for what i update 
        NAME: req.body.NAME, 
        EMAIL: req.body.EMAIL, 
        AGE: req.body.AGE,
        BRANCH: req.body.BRANCH
    })
    .then(Student => res.json(Student))
    .catch(err => res.json(err))
})

//To Delete the Data
app.delete('/deleteStudent/:id', (req,res) =>{
    const id = req.params.id;
    StudentModel.findOneAndDelete({_id: id})
    .then(Student => res.json(Student))
    .catch(err => res.json(err))
})

//Listen 
app.listen(port, () =>{
    console.log(`The Server is Running on The Port ${port}`)
})
