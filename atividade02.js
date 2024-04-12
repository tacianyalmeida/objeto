
//Implemente uma função que mostre quantos 
//ônibus estão disponíveis para uma determinada linha.

const data = require('./onibus.json')

const onibusParaLinha = (idDalinha,) =>{
 
    const onibus = data.onibus.linha.filter((onibus)=> onibus.linha === idDalinha)
 console.log(onibus)

//   let guarda = '' // let vai guarda caso o id da linha seja igual ao valor de  linha no array onibus 

//      if(idDalinha === onibus.linha){
//        guarda = onibus
//      }else{ 
//         return {alert:"linha sem ônibus"}
//      }
const resultado = onibusParaLinha("Expresso centro")
console.log(resultado)
   }
// console.log (guarda)

// if(onibus.length > 0){ // compara a zero para verificar se encontramos algum onibus na linha
//           return onibus
//         }else{ 
//            return {alert:"linha sem ônibus"};
//         }
//        }

//     console.log(onibusParaLinha ("numero de onibus:",linha.data))
