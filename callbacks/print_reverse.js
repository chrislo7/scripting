var getHTML = require('./https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};



function printReverse (html) {
  html.split('').reverse().join();
  console.log(html);

}


getHTML(requestOptions, printReverse)