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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(clienteObjeto));
console.log(Object.entries(clienteObjeto));
oferecerSeguro(clienteObjeto);