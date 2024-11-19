const express = require ('express')

const app = express()

app.listen(8000)

app.get('/rota1', (req, res)=>{                                         //da para registrar mais rotas
    res.send('Mensagem importante')
})  

app.get('/rota2', (req, res)=>{
    res.send('Mensagem importante')
}) 

const servidor = http.createServer((req, res)=> {                       //isso é uma função
    res.end('outra mensagem importante')
})

Server.listen(port, hostname, ()=>{
    console.log('servidor iniciou')
})







const ePalindromo = (palavra) => {
    let palavraEmMinusculo = palavra.toLowerCase()
    let palavraAoContrario = palavraEmMinusculo.split('').reverse().join('')
    return palavraEmMinusculo == palavraAoContrario
}










/* Pegar palavra e transformar em minusculo (palavra,toLowerCase)
Pegar palavra e transformar em um array de caracteres (palavra.split(""))
inverter esse array, juntar de novo em uma palavra (palavra.reverse() e palavra.join())*/


