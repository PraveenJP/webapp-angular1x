var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// Path to app directive
app.use(express.static(__dirname+'/app'));

// Path to Node modules
app.use('/node_modules',express.static(__dirname+'/node_modules'));

// Connect to Server
app.listen(PORT,function(err){
    if(err)
        console.log(err);
    else
        console.log('Server running on: '+PORT);
});