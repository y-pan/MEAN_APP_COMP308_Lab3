/** do db work here */
const StudentModel = require('../models/student.model');

const lib = require('../lib/lib');

const login = (req, res) => {

    StudentModel.findByStudentnumberPassword(req.body.studentnumber, req.body.password)
        .then((student)=>{
            res.json({data:student});
        })
        .catch((err)=>{
            res.json({err:err});
        })
}


const add = (req, res) => {
    let studentJson = {};
    studentJson.studentnumber = req.body.studentnumber;
    studentJson.password = req.body.password;
    studentJson.firstname = req.body.firstname;
    studentJson.lastname = req.body.lastname;
    studentJson.address = req.body.address;
    studentJson.password = req.body.password;

    studentJson.city = req.body.city;
    studentJson.phone = req.body.phone;
    studentJson.email = req.body.email;
    studentJson.program = req.body.program;

    let student = new StudentModel(studentJson); // mongoose instance
    // student.validateSelf(); // I think it is better to explicitly do here for validation of email, password, ...
    StudentModel.add(student)  // call for StudentModel static methods
        .then(data =>{
           res.json({data:data});
        })
        .catch(err =>{
            res.json({err:err});
        })        
}

module.exports = {
     "login":login
    , "add":add
}
