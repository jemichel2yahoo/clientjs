// Consume RESTful services!!!

const https = require('https')
const rp = require('request-promise')
const cas = require('ssl-root-cas/latest')

https.globalAgent.options.ca = cas.create().addFile('cacert.pem')

rp.get('https://localhost.jemichel.org:4433')
  .then((body) => {
    console.log(`${body}`)
  })
  .catch((error) => {
    console.error(error)
  })
