// biblioteca para utilizar funcionalidades de requisiçao e respostas de servidores
const http = require('http')

// metodo para fazer a requisiçao do endereço e a funçao callback que retorna a resposta obtida
http.get(`http://files.cod3r.com.br/curso-js/funcionarios.json`, processResponse)


function processResponse (res) {
  res.setEncoding('utf8')
  res.on('data', console.log)
  res.on('error', console.error)
}