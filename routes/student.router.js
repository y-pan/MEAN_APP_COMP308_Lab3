/** get request url, point to controller where db work is done */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const studentModel = require('../models/student.model');
const studentController = require('../controllers/student.controller')


const express = require('express');
// var ejs = require('ejs');
const router = express.Router();

// register/signup, so user can login
router.route('/signup').post(studentController.add);


// var isValidPassword = function(user, password){
//     return bCrypt.compareSync(password, user.password);
//   }
// passport/login.js
// passport.use('login', new LocalStrategy({
//     passReqToCallback : true
//   },
//   function(req, studentnumber, password, done) { 
//     // check in mongo if a user with username exists or not
//     studentModel.findOne({ 'studentnumber' :  studentnumber }, 
//       function(err, user) {
//         // In case of any error, return using the done method
//         if (err)
//           return done(err);
//         // Username does not exist, log error & redirect back
//         if (!user){
//           console.log('User Not Found with username '+username);
//           return done(null, false, 
//                 req.flash('message', 'User Not found.'));                 
//         }
//         // User exists but wrong password, log the error 
//         console.log("---validate password ...")
//         // if (!isValidPassword(user, password)){
//         //   console.log('Invalid Password');
//         //   return done(null, false, 
//         //       req.flash('message', 'Invalid Password'));
//         // }
//         // User and password both match, return user from 
//         // done method which will be treated like success
//         return done(null, user);
//       }
//     );
// }));

passport.use('login', new LocalStrategy(
    function(studentnumber, password, done) {
        studentModel.findStudentByStudentnumber(studentnumber).then(user => {
            console.log("passport.use locals...")
            if (!user) { return done(null, false, {message: "Unknow user"}); /*user not found*/}

            user.comparePassword(password, user.password, function(err, isMatch){
                if(err){return done(err);}
                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null, false, {message:'Invalid password'});
                }
            })
        }).catch(err => {
            return done(err);
        })
        
        // , function (err, user) {
        //     if (err) { return done(err); }
        //     if (!user) { return done(null, false); }
        //     if (!user.verifyPassword(password)) { return done(null, false); }
        //     return done(null, user);
        //   });
    }
    ));

router.route('/login').post(studentController.login); /** ok */
// console.log(passport.authenticate('local'))
// {successRedirect:"/", failureRedirect:"/student/login", failureFlash:false}
// router.post("/login", passport.authenticate('local', 
//     {successRedirect:"/student/all", failureRedirect:"/student/all", failureFlash:true}), 
//     (req, res)=>{
//     console.log("passport in login??")
// });

router.route('/login').post(
        passport.authenticate('local', {successRedirect:"/", failureRedirect:"/student/login", failureFlash:true})
        , studentController.login); /** ok */

router.route('/all').get(studentController.all);


module.exports = router; 