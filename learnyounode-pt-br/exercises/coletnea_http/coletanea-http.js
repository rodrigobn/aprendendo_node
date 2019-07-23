const http = require(`http`)
const fs = require(`fs`)
const bl = require(`bl`)

http.get(`http://files.cod3r.com.br/curso-js/funcionarios.json`, processResponse)

function processResponse(res) {
    response.pipe(require('bl')(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
}
