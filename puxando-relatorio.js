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

let relatorio = "";

for ( let info in clienteObjeto) {
    if (typeof clienteObjeto[info] === "object" || typeof clienteObjeto[info] === "function"){
        continue;
    }else{
    relatorio += `
    ${info}:  ${clienteObjeto[info]}
    `;
    }
}

console.log(relatorio);