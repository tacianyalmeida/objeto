// Escreva uma função que aceite o ID da linha 
// como entrada e retorne todas as paradas associadas
//  a essa linha, ordenadas pela ordem de parada.

const data = require('./onibus.json')


const filtrarPorStatus = (idDalinha) =>{
  const paradas = data.linhas.filter((linha)=> linha.id === idDalinha).map((parada)=> parada.paradas)
  return paradas
}
const id_linha = 3
console.log(filtrarPorStatus(id_linha))
