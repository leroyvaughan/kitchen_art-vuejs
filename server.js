// server.js
require('./server/lib/global-vars');
require('dotenv').config();
var port = process.env.PORT || 5000;

const db = require('./server/db');
db.on('error', console.error.bind(console, 'Mongo connection error:'));

const app = require('./server/app');
const apiRouter = require('./server/routes/product-router');
app.use("/api", apiRouter);




/*************  FOR PRODUCTION USE ON HEROKUAPP.COM    ********/

//serve files created during "npm run build"
var serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "/dist"));

/*************  FOR PRODUCTION USE ON HEROKUAPP.COM    ********/





/*************  FOR DEV USE    ******************************/

// app.get('/', (req, res) => {
//     res.redirect("/api/kitchenart");
// })

/*************  FOR DEV USE    ******************************/



app.listen(port, function () {
  console.log("server starting on " + port);
});