const clienteObjeto = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    fones: ["55912345678", "552112345678"]
}


clienteObjeto.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(clienteObjeto);

clienteObjeto.dependentes.nome = "Sara Silva";

console.log(clienteObjeto);