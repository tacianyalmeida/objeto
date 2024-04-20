const sisOperacional = require("node:os");

console.log(sisOperacional)

const v = sisOperacional.platform();

console.log(`O sistema operacional é: ${v}`);

