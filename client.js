// Consume RESTful services!!!

const https = require('https')
const request = require('request')
const cas = require('ssl-root-cas/latest')

https.globalAgent.options.ca = cas.create().addFile('cacert.pem')

request.get('https://localhost.jemichel.org:4433', (error, response, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`response: ${response.statusCode} ${response.headers['content-type']} ${body}`)
})
