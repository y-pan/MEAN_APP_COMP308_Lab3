/** get request url, point to controller where db work is done */

const courseController = require('../controllers/course.controller')
let passport = require('passport')

const express = require('express');
// var ejs = require('ejs');
const router = express.Router();


router.route('/create')
        .post(courseController.create)

router.route('/register')
        .post(courseController.register)

router.route('/drop')
        .post(courseController.drop) /** ok */

router.route('/list')
        .get(courseController.list) /** ok */

router.route('/mylist/:student_id') 
        .get(courseController.mylist) /** ok */




module.exports = router; 