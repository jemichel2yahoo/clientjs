// Consume RESTful services!!!

const https = require('https')
const fs = require('fs')

https.get({ hostname: 'api-sandbox.capitalone.com', ca: fs.readFileSync('verisign.pem') }, (response) => {
  console.log(`response: ${response.statusCode} ${response.headers['content-type']}`)

  response.on('data', (d) => {
    console.log(`${new String(d)}`)
  })
}).on('error', (e) => {
  console.error(e)
});
