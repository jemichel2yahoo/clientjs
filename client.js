// Consume RESTful services!!!

const https = require('https')
const fs = require('fs')
const cas = require('ssl-root-cas/latest')

https.globalAgent.options.ca = cas.create().addFile('verisign.pem')

https.get('https://api-sandbox.capitalone.com', (response) => {
  console.log(`response: ${response.statusCode} ${response.headers['content-type']}`)

  response.on('data', (d) => {
    console.log(`${d.toString('utf8')}`)
  })
}).on('error', (e) => {
  console.error(e)
});
