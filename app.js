const express = require('express')
// const Router = express.Router();
const bodyparser = require('body-parser');
const studentRoutes = require('./routes/student');
const mysqlConnection = require('./connection');
const app = express()
app.use(bodyparser.json());

app.use('/student', studentRoutes);

// app.use(app.router);
// studentRoutes.initialize(app);         

// app.get('/',(req,res) =>{
//     res.send("Hello")
// });

// app.get('/student' , (req, res) => {
//     mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
//     if (!err)
//     res.send(rows);
//     else
//     console.log(err);
//     })
//     } );

// app.post('/add', (req, res) => {
//     // req.assert('studentid', 'Id can not be null').notEmpty();
//     // req.assert('firstname', 'name can not be null').notEmpty();
//     let student = req.body;
//     var sql = "INSERT INTO student SET @studentid = ?;SET @firstname = ?;SET @lastname = ?"; 
    
//     mysqlConnection.query(sql, [student.studentid, student.firstname, student.lastname], (err, rows, fields) => {
//     if (!err)
//     rows.forEach(element => {
//     if(element.constructor == Array)
//     res.send('New student ID : '+ element[0].studentid);
//     });
//     else
//     console.log(err);
//     })
//     });

app.listen(5000, () => {
    console.log("Listening to port 5000")
});




