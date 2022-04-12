const clienteObjeto = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    fones: ["55912345678", "552112345678"],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"},
        {
            nome: "Samia Maria",
            parentesco: "filha",    
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function (valor){
        this.saldo += valor;
    }
}

console.log(clienteObjeto.saldo);
clienteObjeto.depositar(30);
console.log(clienteObjeto.saldo);