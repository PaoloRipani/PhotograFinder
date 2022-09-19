const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Peppino');
// });

// -------

// -------

const express = require("express");
const app = express();

// app.get("*", (req, res) => res.send("<p>It works!</p>"));
// app.listen(3000, () => console.log("LISTENING"));

const router = express.Router();

const path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/aboutus', function(req,res){
  res.sendFile(path + 'aboutus.html');
});

router.get('/guide', function(req,res){
  res.sendFile(path + 'guide.html');
});

app.use(express.static(path));
app.use('/', router);
app.use('/images', express.static(__dirname + '/images'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})