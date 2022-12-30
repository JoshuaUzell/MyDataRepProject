const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

//Server listens out for requests from the client

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Used for Mongoose
const mongoose = require('mongoose');

//Used to supress 'strictQuery' warning in the terminal
mongoose.set('strictQuery', false);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.y0s8b0x.mongodb.net/?retryWrites=true&w=majority');
}

const studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: String,
    email: String,
    course: String,
    year: String
});

const studentModel = mongoose.model('students', studentSchema);

app.post('/api/students', (req, res) => {
    console.log(req.body);

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

app.get('/api/students', (req, res) => {
    studentModel.find((error, data) => {
        res.json(data);
    })
})

app.get('/api/student/:id', (req, res) => {
    console.log(req.params.id);
    studentModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Listens for request coming in with a put method, finds a student with a certain id and updates the student
app.put('/api/student/:id', (req, res) => {

    console.log('Update: ' + req.params.id)
    console.log(req.body);

    //Find a student by id and send back some data
    studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

//Listens for request coming in with a delete method with an endpoint passed in as a parameter
app.delete('/api/student/:id', (req, res) => {
    console.log('Deleting: ' + req.params.id); //Log to console saying deleting a certain student id

    //Go to database, find matching id and delete it
    studentModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => { //passes in the id in the url and the callback function that executes after asynchronous operation
        res.send(data); //Sends back the data  
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})