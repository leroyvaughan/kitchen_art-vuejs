// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
app = express();

require('./server/lib/global-vars');
require('dotenv').config();
var port = process.env.PORT || 5000;

var serveStatic = require('serve-static');


const db = require('./server/db');
db.on('error', console.error.bind(console, 'Mongo connection error:'));

const apiRouter = require('./server/routes/product-router');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/api", apiRouter);


/*
HELMET SECURES APP:
    - XSS Protection
    - Prevent Clickingjacking using X-Frame-Options
    - Enforcing all connections to be HTTPS
    - Setting a Context-Security-Policy header
    - Disabling the X-Powered-By header so attackers cannot narrow down their attacks to specific software
*/
var helmet = require('helmet');
app.use(helmet());


//serve files created during "npm run build"
app.use(serveStatic(__dirname + "/dist"));




// app.get('/', (req, res) => {
//     res.redirect("/api/kitchenart");
// })


app.listen(port, function () {
  console.log("server starting on " + port);
});
