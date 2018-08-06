function getAndPrintHTML (options) {

  var https = require('https');
  var buffData = "";


  https.get(options, function (chunk) {

    chunk.setEncoding('utf8');

    chunk.on('data', function (data) {
      buffData += data;
    })

    chunk.on('end', function() {
      console.log(buffData)
      console.log('chunk stream complete.')
    })

  })


  /* Add your code here */

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


getAndPrintHTML(requestOptions)