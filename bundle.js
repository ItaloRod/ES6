"use strict";

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
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var age = usuarios.map(function (usuario) {
  return usuario.idade;
});
var plus18 = usuarios.filter(function (usuario) {
  return usuario.idade > 18;
});
var googleWorker = usuarios.find(function (usuario) {
  return usuario.empresa == 'Google';
});
var moreAge = usuarios.map(function (usuario) {
  usuario.idade *= 2;
  return usuario;
}).filter(function (usuario) {
  return usuario.idade < 50;
});
console.log(age, plus18, googleWorker, moreAge);
