// function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
  //  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    //    return res.redirect('https://' + req.get('host') + req.url);
    //}
   // next();
//}

const express = require('express');
const app = express();
const path = require('path');

app.use(requireHTTPS);

app.use(express.static('./dist/math-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/math-app/'});
  });

app.listen(process.env.PORT || 8080);

// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/math-app'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+'/dist/math-app/index.html'));});
// app.listen(process.env.PORT || 8080);
