/** get request url, point to controller where db work is done */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


const studentModel = require('../models/student.model');
const studentController = require('../controllers/student.controller')


const express = require('express');
// var ejs = require('ejs');
const router = express.Router();



passport.use(new LocalStrategy({usernameField: 'studentnumber'},
  function(studentnumber, password, done) {
    console.log("passport.use(new LocalStrateg(...)) ...")
      studentModel.findOne({ studentnumber: studentnumber }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect studentnumber.' });
      }
      user.comparePassword(password, user.password, (err, isMatch) =>{
        if(err){
          return done(err)
        }else{
          if(isMatch){
            console.log(" yes matched... return user obj")
            // console.log(user);
            return done(null, user);
          }else{
            console.log(" not matched... return false")

            return done(null, false);
          }
        }
      })
      // if (!user.verifyPassword(password)) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }
      // return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  studentModel.findById(id, function(err, user) {
      done(err, user);
  });
});






// register/signup, so user can login
router.route('/signup').post(studentController.add);
// router.route('/login').post(studentController.login); /** ok without passport */
router.route('/all').get(studentController.all); /** for admin user */


router.post('/login',
//{successRedirect:"/", failureRedirect:'/', failureFlash:true}
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log("Authenticated user...")
    // console.log(req.user)
    if(req.user){
      res.json({data:req.user}); /** Using angular 4, only 1 page,  */
    }else{
      res.json({err:"Invalid credential!"})
    }

  });

module.exports = router; 