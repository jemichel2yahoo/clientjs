// Consume RESTful services!!!

const https = require('https')
const fs = require('fs')

https.get({
    hostname: 'api-sandbox.capitalone.com',
    ca: [ fs.readFileSync('c2.pem', 'utf8'), fs.readFileSync('c3.pem', 'utf8') ]
  }, (response) => {
  console.log(`response: ${response.statusCode} ${response.headers['content-type']}`)

  response.on('data', (d) => {
    console.log(`${d.toString('utf8')}`)
  })
}).on('error', (e) => {
  console.error(e)
});
