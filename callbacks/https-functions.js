module.exports = function getHTML (options, callback) {
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

};

function printHTML (html) {
  console.log(html);
}
