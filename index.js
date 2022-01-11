const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
const port = 3000;
const path = require("path");
require('dotenv').config()

// const router = express.Router();
const mongoose = require("mongoose");


// mongoose.connect(process.env.DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const studentSchema = new mongoose.Schema({
//   roll_no: {
//     type:Number,
//     required: true
//   },
//   name: String,
//   year: Number,
//   subjects: [String]
// }).set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// const Student = mongoose.model('Student', studentSchema);


// // Create a new document
// const stud = new Student({
//     roll_no: 1001,
//     name: 'Madison Hyde',
//     year: 3,
//     subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
// });


// app.get('/', (req, res) => {
//   Student.find({}, (err, found) => {
//       if (!err) {
//           res.send(found);
//       } else {
//           console.log(err);
//           res.send("Some error occured!")
//       } 
//   });
// });

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`app listening on port ${port} !`);
});
