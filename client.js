// Consume RESTful services!!!

const https = require('https')

https.get('https://api-sandbox.capitalone.com', (response) => {
  console.log(`response: ${response.statusCode} ${response.headers['content-type']}`)

  response.on('data', (d) => {
    process.stdout.write(d)
  })
}).on('error', (e) => {
  console.error(e)
});
