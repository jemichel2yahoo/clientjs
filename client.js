const request = require('request')
request('http://jemichel.org', (error, response, body) => {
  if (error) {
    console.log('error:', error)
  } else {
    console.log('response:', response.statusCode, response.headers['content-type'], body)
  }
})
