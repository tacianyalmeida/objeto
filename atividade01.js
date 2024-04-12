//Crie uma função que aceite o ID da linha como
 //entrada e retorne os horários de partida e chegada para essa linha.

 const data = require('./onibus.json')

const aceitaId = (idDalinha) => {
    const linha = data.linhas.find((linha)=> linha.id == idDalinha);
     console.log(linha)

    if(linha) {
        const horarios = linha.horarios.map((horarios) => {
            return `Saída: ${horarios.saída}, Chegada: ${horarios.chegada}`;
        });
        return horarios.join('\n')
    }else{
        return {message: "Não foi encontrada uma linha"};
    }
};

const id = ("") //ou id = 1 ? 
const horarioDasLinhas = aceitaId(id)
console.log(horarioDasLinhas)


