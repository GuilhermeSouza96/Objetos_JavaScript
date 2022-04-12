const cliente = [
    {
        nome: "André",
        cpf: "12345678910",
        dependentes: [
            {
                nome: "Sara",
                parentesco: "filha",
                dataNasc: "20/03/2011"
            },
            {
                nome: "Samia",
                parentesco: "filha",    
                dataNasc: "04/01/2014"
            }
        ]
    },
    {
        nome: 'Juliana',
        cpf: '123498746523',
        dependentes: [{
                nome: 'Sophia',
                parentesco: 'filha',
                dataNasc: '30/08/2020'
        }]
    }
]

for (let i = 0; i < cliente.length; i++){
    listaDependentes = [...cliente[i].dependentes];
}
// cliente.forEach(index => listaDependentes = [...cliente[index].dependentes])

// const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes];

console.table(listaDependentes);

