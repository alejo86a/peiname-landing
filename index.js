var express = require('express');
var app = express();
var path = require('path');
var cool = require('cool-ascii-faces');

var root = path.normalize(__dirname);

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));
app.use('/views', express.static(path.join(root, '/views')));
//app.use(express.static(__dirname + '/views'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

    app.engine('html', require('ejs').renderFile);
    app.set('view engine' , 'html');
    //app.use('/',express.static('/views/www'));
    
    
    

/*app.get('/', function(request, response) {
  response.render('www/index');
});*/

app.get('/', function(request, response) {
  response.sendFile(path.join(root,'/views/www/index.html'));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


