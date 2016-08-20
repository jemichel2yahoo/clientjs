// Consume RESTful services!
const request = require('request')

request('http://jemichel.org', (error, response, body) => {
  console.log(`${process.arch} ${process.cwd()}`, process.argv, process.env)
  if (error) {
    console.log(`error: ${error}`)
  } else {
    console.log(`response: ${response.statusCode} ${response.headers['content-type']} ${body}`)
  }
})
