function getHTML (options, callback) {
  var https = require('https');
  var buffData = "";


  https.get(options, function (chunk) {

    chunk.setEncoding('utf8');

    chunk.on('data', function (data) {
      buffData += data;
    })

    chunk.on('end', function() {
      callback(buffData);
    })

  })
  /* Add your code here */

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML)