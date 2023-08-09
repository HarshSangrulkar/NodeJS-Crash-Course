//const url = require('url');
const URL = require('url').URL
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialised url
console.log(myUrl.href);