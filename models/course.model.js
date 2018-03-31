const mongoose = require('mongoose');
const lib = require('../lib/lib');

const schema = mongoose.Schema;

const coursechema = new schema({
    code: {
        type: String, 
        unique: true,
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    name: {
        type: String,
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    section: {
        type: String, /** I know most likely it is a number like: 1,2,3, but I saw combined section like 1c, 2c,  so keep it as string for now */
        required: true,/* built in validator  */
        minlength: 1, /* built in validator  */
    },
    semester: {
        type: String,  /** I know most likely it is a number like: 1,2,3, but I'm not sure if it could be like: 2018W, so keep is as string for now*/
        required: true, /* built in validator  */
        minlength: 1/* built in validator  */
    },
    students:{  /** student registered in this course. */
      type:[String],
      default:[]
    }
}, { collection: 'course' });

/* method that will be used as static method - without having instance of the model */


coursechema.statics.all = (code) => {
    return new Promise((res, rej) => {
        self.find({}, (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
}

coursechema.statics.register = (course_id, student_id) => {
    return new Promise((resolve, reject) => {
        self.findOne({ "_id": course_id }, (err, course) => {
            if (err) {reject(err);}
            else {
                if(lib.arrayContains(course.students, student_id)){
                    resolve(course); // already registered, here just do nothing, though it is also acceptable to raise error cause you only need to register once
                }else{
                    course.students.push(student_id);
                    course.save((err, _course) =>{
                        if(err){ reject(err); }
                        else resolve(_course);
                    });
                }
            }
        });
    });
}

coursechema.statics.drop = (course_id, student_id) => {
    return new Promise((resolve, reject) => {
        self.findOne({ "_id": course_id }, (err, course) => {
            if (err) {reject(err);}
            else {
                var isRemoved = false;
                for(var i=0, len=course.students.length; i<len; i++){
                    if(course.students[i] == student_id){
                        course.students.splice(i, 1);
                        isRemoved = true;
                        break;
                    }
                }
                // here not to raise error when student is already not in the course, though it is acceptable to raise error
                if(isRemoved){
                    course.save((err, _course)=>{
                        if(err){ reject(err);}
                        else{
                            resolve(_course);
                        }
                    })
                }else{
                    resolve(course);
                }
            }
        });
    });
}

coursechema.statics.findCoursesHavingStudentId = (student_id) => {
    return new Promise((res, rej) => {
        self.find({ students: student_id }, (err, data) => {
                   /** { array: element}  */
            if (err) rej(err);
            else res(data);
        });
    });
}






coursechema.statics.findById = (id) => {
    return new Promise((res, rej) => {
        self.findOne({ "_id": id }, (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
}

coursechema.statics.findByCode = (code) => {
    return new Promise((res, rej) => {
        self.findOne({ "code": code }, (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
}



coursechema.statics.add = (course) => { // course is mongose instance(object). so add new course entity
    return new Promise((res, rej) => {
        course.save((err, data) => {
            if (err) rej(err);
            res(data);
        })
    })
}

//'course' will relate to 'course' collection 
const self = module.exports = mongoose.model("course", coursechema);
