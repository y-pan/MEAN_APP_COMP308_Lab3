const express = require('express');
const studentRouter = require('./routes/student.router');
const courseRouter = require('./routes/course.router');

const bodyParser = require('body-parser');
// const session = require('express-session');

// ********************************* todo: passport!!! ****************************************************************************/

const mongoose = require('mongoose');
// const ejsEngine = require('ejs-locals');  // ejs layout template


const env = process.env.DEPLOY || "dev";
const conf=require('./config/'+env+".json");  // conf could also be an object from process.env.conf from deployment server like heroku, instead of a physical file which could leads to security issue
const port = conf.port || 8000;


mongoose.Promise = global.Promise;
mongoose.connect(conf.dburl).then(()=>{
    console.log('[OK] MongoDB is connected: ' + conf.dburl)
}).catch((err)=>{
    console.log('[err] MongoDB failed to connect:' + err)
});


const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/student", studentRouter); /** studentRouter */
app.use("/api/course", courseRouter); /** courseRouter */

app.get("/*", (req, res)=>{
    res.json("Goto /api/student, /api/course")
})
/*****************************************************  use passport ********************************************************* */
// app.use(session({
//     secret:conf.secret
//     ,resave:true
//     ,saveUninitialized:true
// }));


app.listen(port, ()=>{
    console.log ("App is running at: " + port);
});