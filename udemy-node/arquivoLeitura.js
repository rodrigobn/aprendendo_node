const fs = require(`fs`)

// __dirname = diretorio atual
const caminho = __dirname + `/arquivo.json`

// Lendo arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, `utf-8`)
console.log(conteudo)

// Lendo arquivo de forma assincrona
fs.readFile(caminho, `utf-8`, (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require(`./arquivo.json`)
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(`Conteudo da pasta...`)
    console.log(arquivos)
})