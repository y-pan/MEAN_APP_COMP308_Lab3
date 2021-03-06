/** do db work here */
const StudentModel = require('../models/student.model');

const lib = require('../lib/lib');

const login = (req, res) => {
    /** this method assumes that password in db doesn't get encrypted, just plain text. */
    console.log("login in studentcontrollerjs")
    StudentModel.findByStudentnumberPassword(req.body.studentnumber, req.body.password)
        .then((student)=>{
            res.json({data:student});
        })
        .catch((err)=>{
            res.json({err:err});
        })
}

const loginEncrypted = (req, res) => {
    /** This method assumes that password in db was encrypted during signup, 
     * incomming plain password need to compare with hashed password using bcrypt */
    console.log("@@@@@@@@@login in studentcontrollerjs, encrypted")
    StudentModel.findByStudentnumberPasswordEncrypted(req.body.studentnumber, req.body.password)
        .then((student)=>{
            res.json({data:student});
        })
        .catch((err)=>{
            res.json({err:err});
        })
}


const add = (req, res) => {
    /** register/add student account */
    
    let studentnumber = req.body.studentnumber;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let address = req.body.address || "";
    
    let city = req.body.city || "";
    let phone = req.body.phone || "";
    let email = req.body.email;
    let program = req.body.program || "";

    let studentJson = {
          studentnumber : studentnumber
        , password : password
        , firstname : firstname
        , lastname : lastname
        , address : address
        , city : city
        , phone : phone
        , email : email
        , program : program
    };

    let student = new StudentModel(studentJson); // mongoose instance
    StudentModel.add(student)  // call for StudentModel static methods
        .then(user =>{
            res.json({data:user});
            // console.log("todo req.login: " + user["_id"]);
            // req.login(user["_id"], function(err) {
            //     if (err) { return next(err); }
            //     // return res.redirect('/users/' + req.user.username);
            //     res.json({data:user});
            //   });
           
        })
        .catch(err =>{
            res.json({err:err});
        })        
}
const all = (req, res) =>{
    StudentModel.all()
        .then(data =>{
            res.json({data:data});
        }).catch(err =>{
            res.json({err:err});
        })
}

module.exports = {
     "login":loginEncrypted

    , "add":add
    , "all":all
}
