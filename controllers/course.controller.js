/** do db work here */
const CourseModel = require('../models/course.model');

const lib = require('../lib/lib');


const create = (req, res) => {
    let courseJson = {};
    courseJson.code = req.body.code;
    courseJson.name = req.body.name;
    courseJson.section = req.body.section;
    courseJson.semester = req.body.semester;
    
    let course = new CourseModel(courseJson); // mongoose instance
    // course.validateSelf(); // I think it is better to explicitly do here for validation of email, password, ...
    console.log(course)
    CourseModel.add(course)  // call for CourseModel static methods
        .then(data =>{
            if(!data){
                // res.render('create_course', {'errMsg':"Failed to sign up, try again"} )
                res.json({"err":"Error in creating course"})
            }else{
                // data.password = ""; // wipe out password so frontend won't see it, and secured
                // res.render('create_course', {data:data}) // show feedback.ejs, with data
                res.json({data:data})
            }
        })
        .catch(err =>{
            res.json({"err":err})
        })        
}

const register = (req, res) =>{
    let student_id = req.body.student_id;
    let course_id = req.body.course_id;
    CourseModel.register(course_id, student_id).then(data =>{
        res.json({data:"OK"}); 
    }).catch(err =>{
        res.json({err:"error in registering"});
    })
}

const list = (req, res) =>{
    CourseModel.all().then(data =>{
        res.json({data:data});
    }).catch(err =>{
        res.json({err:err});
    })
}

const drop = (req, res) =>{
    let student_id = req.body.student_id;
    let course_id = req.body.course_id;
    CourseModel.drop(course_id, student_id).then(data =>{
        res.json({data:"OK"}); 
    }).catch(err =>{
        res.json({err:"error in dropping course"});
    })
}

const mylist = (req, res) =>{
    let student_id = req.params.student_id;
    console.log("find courses by student_id...")
    CourseModel.findCoursesHavingStudentId(student_id)
        .then(courses =>{
            res.json({data:courses});
        }).catch(err => {
            res.json({err:err});
        });
}


module.exports = {
    "create":create, /** create is only for admin, not for student */
    "list":list
    , "register":register,"mylist":mylist, "drop":drop
}

