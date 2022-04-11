const clienteObjeto = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

// console.log(clienteObjeto[chaves[0]]);

chaves.forEach(info => console.log(clienteObjeto[info]));

console.log(clienteObjeto["conta"]);