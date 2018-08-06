function getAndPrintHTMLChunks () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('URL received: ', data);
    })

    response.on('end', function() {
      console.log('response stream complete.')
    })

  })

  /* Add your code here */

}

getAndPrintHTMLChunks()