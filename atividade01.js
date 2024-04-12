//Crie uma função que aceite o ID da linha como
 //entrada e retorne os horários de partida e chegada para essa linha.

 const data = require('./onibus.json')

const aceitaId = (idDalinha) => {
    const linha = data.linhas.find((linha)=> linha.id == idDalinha);
     console.log(linha)

    if(linha) {
        const horarios = linha.horarios.map((horario) => {
            return `Saída: ${horario.saida}, Chegada: ${horario.chegada}`;
        });
        return horarios.join('\n')
        return horarios
    }else{
        return {message: "Não foi encontrada uma linha"};
    }
};

const id = 1 // apenas para determinar a linha que eu quero acessar 
const horarioDasLinhas = aceitaId(id)
console.log(horarioDasLinhas)


// correção 


