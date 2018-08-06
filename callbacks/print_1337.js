var getHTML = require('./https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  console.log(change(html))

}

getHTML(requestOptions, print1337)

var change = function(input) {
  input.replace(/a/g, '4');
  input.replace(/e/g, '3');
  input.replace(/l/g, '1');
  input.replace(/o/g, '0');
  input.replace(/s/g, '5');
  input.replace(/t/g, '7');
  return input
}


/*
a : '4',
e : '3',
l : '1',
o : '0',
s : '5',
t : '7',
*/
// 'ck' : 'x',
// 'er' : '0r',
// 'you' : 'j00'

