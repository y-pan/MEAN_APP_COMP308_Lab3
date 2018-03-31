const mongoose = require('mongoose');
const lib = require('../lib/lib');

const schema = mongoose.Schema;

const studentchema = new schema({
    studentnumber: {
        type: String,
        unique: true,
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    password: {
        type: String,
        required: true,
        minlength: 6 /* built in validator */
        , maxlength: 18
        , validate: [lib.validatePassword, 'Invalid password, make sure it is 6 ~ 18 length, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character(!@#$%^&*])'] /*custom validator. stronly is a function defined below */
    },
    firstname: {
        type: String,
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    lastname: {
        type: String,
        required: true,/* built in validator  */
        minlength: 1, /* built in validator  */
        // uppercase:true, /* schema modifier */
    },
    address: {
        type: String,
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    city: {
        type: String,
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    phone: {
        type: String,
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    email: {
        type: String,
        required: true,/* built in validator  */
        unique: true, /* index */
        validate: [lib.validateEmail, 'Invalid email format']  /* custome email format validation function */
    },
    program: {
        type: String
    },
    // courses:{
    //     type:[String],
    //     default:[] /* list of selected course codes ---> moved into course.model  */
    // }
}, { collection: 'student' });


/* method that will be used as static method - without having instance of the model */
studentchema.statics.findById = (id) => {
    return new Promise((res, rej) => {
        self.findOne({ "_id": id }, (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
}

studentchema.statics.findByStudentnumberPassword = (studentnumber, password) => {
    return new Promise((res, rej) => {
        console.log(studentnumber, password)
        self.findOne({ "studentnumber": studentnumber, "password": password }, (err, data) => {
            if (err) {
                 rej(err); 
                }
            else {
                if (!data) { 
                    rej("Invalid student number or password"); }
                else {
                    res(data);
                }
            }
        })
    })
}


studentchema.statics.add = (student) => { // student is mongose instance(object). so add new student entity
    return new Promise((resolve, reject) => {
        student.save((err, data) => {
            if (err) {reject(err);}
            else {resolve(data);}
        })
    })
}

/* schema instance method, available for returned object, like you insert/find data, and you get the data back which is an instance, then you have all instance methods like this */
studentchema.methods.validateSelf = function () {
    console.log("validateSelf: " + this.firstname + " from instance method");
}

studentchema.methods.getFullName = function () {
    return this.firstname + " " + this.lastname
}

//'student' will relate to 'student' collection 
const self = module.exports = mongoose.model("student", studentchema);
