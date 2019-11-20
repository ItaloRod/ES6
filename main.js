//1º Exercicio

// class Usuario {
//     constructor(email, senha, admin = false) {
//         this.email = email
//         this.senha = senha
//         this.admin = admin
//     }

//     isAdmin() {
//         return this.admin
//     }
// }

// class Admin extends Usuario {
//     constructor(email, senha) {
//         super(email, senha, true)
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123')
// const Adm1 = new Admin('email@teste.com', 'senha123')

// console.log(User1.isAdmin())
// console.log(Adm1.isAdmin())

//2º Exercicio

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

const age = usuarios.map(usuario => usuario.idade)
const plus18 = usuarios.filter(usuario => usuario.idade > 18)
const googleWorker = usuarios.find(usuario =>  usuario.empresa == 'Google')

const moreAge = usuarios.map(usuario => {
    usuario.idade *= 2
    return usuario
}).filter(usuario => usuario.idade < 50)
console.log(age, plus18, googleWorker, moreAge)