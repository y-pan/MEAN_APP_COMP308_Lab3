/** get request url, point to controller where db work is done */

const studentController = require('../controllers/student.controller')


const express = require('express');
// var ejs = require('ejs');
const router = express.Router();

router.route('/login')
        .post(studentController.login) /** ok */

router.route('/signup')
        .post(studentController.add)

        
// router.route('/course')
//     .get(courseController.showCourse)
//     .post(courseController.doCourse);

// router.post('/thankyou',(req,res) => {
//     res.render('thankyou');
//     // res.send('login')
// });

// router.route('/admin')
//     .get(courseController.all)

// router.post('/course',(req,res) => {
//     console.log("session:")
//     console.log(req.session);
//     res.render('thankyou', req.body);
//     // res.send('login')
// });

module.exports = router; 