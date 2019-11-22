// class List {
//     constructor() {
//         this.data = []
//     }
//     add(data) {
//         this.data.push(data)
//         console.log(this.data)
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super()
//         this.usuario = 'Diego'
//     }

//     mostraUsuario () {
//         console.log(this.usuario)
//     }
// }

// const MinhaLista = new TodoList()
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('novotodo')
//     MinhaLista.mostraUsuario()
// }

// const x =  {name: 'xyz'}

// x.name = 'abc'
// x.phone = '88180684'


// const usuario = {
//     nome: 'Paulo',
//     idade: 24,
//     endereco: {
//         cidade: 'Fortaleza',
//         estado: 'CE'
//     },
// }

// Desestruturação
// const { nome, idade, endereco: { cidade } } = usuario

// console.log(nome)
// console.log(idade)
// console.log(cidade)


// rest and spread

// const { nome, ...resto} = usuario

// console.log(nome)
// console.log(resto)

// Object Short Syntax

const nome = 'Paulo'
const idade = 24

const usuario = {
    nome,
    idade,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    }
}

console.log(usuario)

