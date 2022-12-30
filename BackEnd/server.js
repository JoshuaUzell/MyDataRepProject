const express = require('express')
const app = express() //Create a new express app
const port = 4000 //Set a port for app to listen on
var bodyParser = require('body-parser')

//Used to access data sent in the request body 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Used for allowing cross-origin resource sharing
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Require Mongoose
const mongoose = require('mongoose');

//Used to supress 'strictQuery' warning in the terminal
mongoose.set('strictQuery', false);

main().catch(err => console.log(err));

//Connect to mongo database via mongoose
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.y0s8b0x.mongodb.net/DataRep?retryWrites=true&w=majority');
}

//Creates a schema for student documents
const studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: String,
    email: String,
    course: String,
    year: String
});

//Creates a model based on the student schema above
const studentModel = mongoose.model('students', studentSchema);

//Using the request body to create a new student document
app.post('/api/students', (req, res) => {
    studentModel.create({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        course: req.body.course,
        year: req.body.year
    })

    res.send('Data Recieved');
})

//Find all students in the database and send back their data as JSON
app.get('/api/students', (req, res) => {
    studentModel.find((error, data) => {
        res.json(data);
    })
})

//Find a student by their ID and send their data back in JSON format
app.get('/api/student/:id', (req, res) => {
    studentModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Find a student by their ID and update their data
app.put('/api/student/:id', (req, res) => {
    studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

//Find a student by their ID and delete it
app.delete('/api/student/:id', (req, res) => {
    studentModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => { //passes in the id in the url and the callback function that executes after asynchronous operation
        res.send(data);
    })
})

//Listen for incoming requests on port 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})