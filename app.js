var http = require('http');
var fs = require('fs');
var express = require('express');

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  target = './index.html';

  fs.readFile(target, 'utf-8', function (err, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  })
}).listen(8080);

// 起動ログ
console.log('Server running at http://127.0.0.1:8080/');
