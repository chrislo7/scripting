

function getAndPrintHTML () {

  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var buffData = "";


  https.get(requestOptions, function (chunk) {

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


getAndPrintHTML()