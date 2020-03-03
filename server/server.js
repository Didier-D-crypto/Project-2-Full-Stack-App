
var fs =require('fs');
var express = require('express'); 


// Import: Handshake between routes and server file. 
// './' tells it that it is a folder instead of node module
var indexRoutes =require('./routes/index');

var app = express(); 

app.set('view engine', 'html'); 
app.engine('html', function (path, options, callbacks){
    fs.readFile(path, 'utf-8', callback); 

}); 
//Middleware: Brigde between an operating system and the applications 
// running on it//
app.use(express.static(path.join(__dirname, '../client'))); 
 
//ROUTES: handshake between routes and server file// 
app.use('/', indexRoutes);


//Error Handler//
app.use(function(err, req, res, next){
    res.status(err.status || 2999)
});



module.exports =app;