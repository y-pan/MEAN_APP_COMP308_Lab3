/** do db work here */
const StudentModel = require('../models/student.model');
const passport = require('passport');

const lib = require('../lib/lib');

const login = (req, res) => {
    console.log("login in studentcontrollerjs")
    StudentModel.findByStudentnumberPassword(req.body.studentnumber, req.body.password)
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

    // // validation
    // req.checkBody('studentnumber','Student number is required').notEmpty();
    // req.checkBody('password','Password is required').notEmpty();
    // req.checkBody('firstname','Firstname is required').notEmpty();
    // req.checkBody('lastname','Last name is required').notEmpty();
    // req.checkBody('email','Email name is required').notEmpty();

    // req.checkBody('email','Email name is required').isEmail();
    // // req.checkBody('password2','Passwords do not match').equals(password);

    // var errors = req.validationErrors();
    // if(errors){
    //     console.log("Yes errors");
        
    // }else{
    //     console.log("No errors");
    // }

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
    // student.validateSelf(); // I think it is better to explicitly do here for validation of email, password, ...
    StudentModel.add(student)  // call for StudentModel static methods
        .then(user =>{
            console.log("todo req.login: " + user["_id"]);
            
            req.login(user["_id"], function(err) {
                if (err) { return next(err); }
                // return res.redirect('/users/' + req.user.username);
                res.json({data:user});
              });
           
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
     "login":login
    , "add":add
    , "all":all
}


passport.serializeUser(function(_id, done){
    console.log("passport.serializeUser...")
    done(null, _id);
});
passport.deserializeUser(function(_id, done){
    console.log("passport.deserializeUser...")
    
    studentModel.findById(_id).then(user => {
        done(null, user);
    }).catch(err => {
        done(err, null);
    })
});