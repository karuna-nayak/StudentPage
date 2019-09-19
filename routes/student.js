const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');



Router.get('/',(req,res)=>{
    mysqlConnection.query("SELECT * FROM student ",(err, rows, fields) => {
        if (!err)
            res.send(rows);
            
        else
            console.log(err);
        })
    
});

// get studnet based on id
Router.get('/:id', (req, res)=>{
    console.log("getting id");
    mysqlConnection.query("SELECT * FROM student WHERE studentid = ?",[req.params.id],(err, rows, fields) => {
        if (!err)
            res.send(rows);
            // res.json({
            //     data : rows
            // })
        else
            console.log(err);
        })
});


// delete studnet based on id
Router.delete('/:id', (req, res)=>{
    mysqlConnection.query("DELETE from student WHERE studentid = ?",[req.params.id],(err, rows, fields) => {
        if (!err)
            res.send("Student deleted successfully");
        else
            console.log(err);
        })
});

// insert new student
Router.post('/add',(req, res)=>{
// Router.route('/add').post((req, res)=>{
    var std = req.body;
    console.log(std)
    mysqlConnection.query("INSERT INTO student(studentid, firstname, lastname, email, address, GPA) VALUES(?,?,?,?,?,?)",
    [Number(std.studentid), std.firstname.toString(), std.lastname.toString(), std.email.toString(), std.address.toString(), parseFloat(std.GPA)],(err, rows, fields) => {
        if (!err)
            res.send("Student insterted successfully");
            // res.send(rows);
        else
            console.log(err);
        })

});

// update  student
Router.put('/', (req, res)=>{
    var std = req.body;
    mysqlConnection.query("UPDATE student SET firstname=?, lastname=? WHERE studentid=?",[std.firstname, std.lastname, std.studentid],(err, rows, fields) => {
        if (!err)
            res.send("Student updated successfully");
            // res.send(rows);
        else
            console.log(err);
        })
});




module.exports = Router;