//HTTP Requests
const request = require('postman-request');

//Request Example
request('https://www.google.com', function (error, response, body) {
  const responseobj = {
    error: error,
    statusCode: `${response} : ${response.statusCode}`,
    body: body,
  };
  console.log(responseobj);
});
