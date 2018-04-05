const express = require('express');
const studentRouter = require('./routes/student.router');
const courseRouter = require('./routes/course.router');
const bodyParser = require('body-parser');

const session = require('express-session');
const expressValidator = require('express-validator');

const flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


const cookieParser = require('cookie-parser');
const path = require('path')

const studentModel = require('./models/student.model');

// ********************************* todo: passport!!! ****************************************************************************/

const mongoose = require('mongoose');
// const ejsEngine = require('ejs-locals');  // ejs layout template

// if(process.env.heroku_deploy){
//     // use heroku env
// }else{
    
// }



const env = process.env.DEPLOY || "dev";
const conf=require('./config/'+env+".json");  // conf could also be an object from process.env.conf from deployment server like heroku, instead of a physical file which could leads to security issue

let port = conf.port || 8000;
console.log("port is: " + port);
let dburl = "";
if(process.env.heroku_deploy_mark){
    dburl = process.env["dburl"];
    port = process.env.PORT;
    console.log("use heroku env for dburl");
}else{
    console.log("use cred.json ")
    const cred = require('./config/cred.json');
    dburl = cred.dburl;
}
const app = express(); 

mongoose.Promise = global.Promise;
mongoose.connect(dburl).then(()=>{
    console.log('[OK] MongoDB is connected.')

}).catch((err)=>{
    console.log('[err] MongoDB failed to connect:' + err)
    
});



app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Express Validator, after bodyparser
app.use(expressValidator());

app.use(cookieParser());
// express session
app.use(session({ secret:'secret4lab3', saveUninitialized: false, resave:false }));

// static 
app.use(express.static(path.join(__dirname, 'dist')));

// passport init
app.use(passport.initialize());
app.use(passport.session());


// connect flash
app.use(flash());

// global vars
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});



// set headers so that client have accesses to api

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get("/", (req, res)=>{
    if(process.env.heroku_deploy_mark){
        var _path = path.join(__dirname + 'index.html'); /** this is to use static page, which is Anguar 4 build */
        // console.log(_path)
        res.sendFile(_path)
    }else{
        res.json({"root":"local mode"})
    }
    
})

app.use("/api/student", studentRouter); /** studentRouter */
app.use("/api/course", courseRouter); /** courseRouter */



app.listen(port, ()=>{
    console.log ("App is running at: " + port);
});