const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
}

const request = http.request(
  options, (response) => {
  console.log('Response Status Code :>> ', response.statusCode);

  response.on('data', (chunk) => {
    console.log(`Data arrived: ${chunk.toString()}`);
  });

  response.on('error', (err) => {
    console.log('Response error :>> ', err);
  })

});