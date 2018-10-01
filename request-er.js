const fs = require('fs');
const request = require('request');

const URL = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(URL)
  .on('err', function(err) {
    console.log(err);
  })
  .on('response', function(response) {
    console.log("Response status:",response.statusCode);

  })
  .pipe(fs.createWriteStream('./future.jpg'));

