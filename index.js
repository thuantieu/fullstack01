const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
const port = 3000;
const path = require("path");
require('dotenv').config()

// const router = express.Router();
const mongoose = require("mongoose");

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

// router.get("/about", (req, res) => {
//   res.send("about");
// });

// app.use("/", router);

// database connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  roll_no: {
    type:Number,
    required: true
  },
  name: String,
  year: Number,
  subjects: [String]
}).set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Student = mongoose.model('Student', studentSchema);


// Create a new document
const stud = new Student({
    roll_no: 1001,
    name: 'Madison Hyde',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
// Add the document to Collections

// stud.save().then(() => console.log("One entry added"));
// get documents
// const stud2 = new Student({
//   roll_no: 1002,
//   name: 'Henry Thomas',
//   year: 2,
//   subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
// }).save((err) => {
//   if (err) return handleError(err);
// });

// const stud3 = new Student({
//   roll_no: 1002,
//   name: 'Henry Thomas',
//   year: 2,
//   subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
// }).save((err) => {
//   if (err) return handleError(err);
// });

app.get('/', (req, res) => {
  Student.find({}, (err, found) => {
      if (!err) {
          res.send(found);
      } else {
          console.log(err);
          res.send("Some error occured!")
      } 
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port} !`);
});
