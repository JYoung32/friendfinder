//Dependencies
var express = require('express');
var path = require('path');

//Setting up Express
var app = express();
var PORT = process.env.PORT || 8080;

//Express app data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});