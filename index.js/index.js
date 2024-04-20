const os = require("node:os");
console.log(os.cpus()[0].model); //os  é um modulo que eu consigo acessar algunas coisas na minha maquina  com os eu faço a analise da saude da minha maquina, essa instrução.

console.log(os.cpus().length);
console.log(os.freemem()); // quantidade de memoria disponivel no computador 
console.log(os.homedir()); //onde esta o projeto que to trabalhando ou o diretorio.

console.log(os.type()[0]); // me mostra o sistema operacional do computador 