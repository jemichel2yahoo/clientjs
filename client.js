// Consume RESTful services!!!

const https = require('https')
const rp = require('request-promise')
const cas = require('ssl-root-cas/latest')

https.globalAgent.options.ca = cas.create().addFile('bundle.pem')

rp.get({
    uri: 'https://localhost.jemichel.org:4433',
    resolveWithFullResponse: true
  })
  .then((response) => {
    console.log(`${response.statusCode} ${response.headers['content-type']} ${response.body}`)
  })
  .catch((error) => {
    console.error(error)
  })
