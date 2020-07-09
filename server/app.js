const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/*
HELMET SECURES APP:
    - XSS Protection
    - Prevent Clickingjacking using X-Frame-Options
    - Enforcing all connections to be HTTPS
    - Setting a Context-Security-Policy header
    - Disabling the X-Powered-By header so attackers cannot...
       narrow down their attacks to specific software
*/
var helmet = require('helmet');




const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());


module.exports = app;