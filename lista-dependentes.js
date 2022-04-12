const clienteObjeto = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    fones: ["55912345678", "552112345678"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

clienteObjeto.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

// console.log(clienteObjeto)

const filhaMaisNova = clienteObjeto.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);