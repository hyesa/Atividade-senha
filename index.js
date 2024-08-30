const  prompt = require('prompt-sync');
const entrada = prompt();

const senhacorreta = "2024";
var numero = entrada(`Digite a senha `);
while (numero != senhacorreta) {
  console.log(`senha incorreta`);
  numero = entrada(`Digite a senha `);
}
console.log(`senha correta`);