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
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ]
// const age = usuarios.map(usuario => usuario.idade)
// const plus18 = usuarios.filter(usuario => usuario.idade > 18)
// const googleWorker = usuarios.find(usuario =>  usuario.empresa == 'Google')
// const moreAge = usuarios.map(usuario => {
//     usuario.idade *= 2
//     return usuario
// }).filter(usuario => usuario.idade < 50)
// console.log(age, plus18, googleWorker, moreAge)
//3º Exercício
// const arr = [1,2,3,4,5]
// console.log(arr.map(item => item + 10))
// const usuario = {nome: 'Diego', idade: 23}
// const mostrarIdade = usuario => usuario.idade
// console.log(mostrarIdade(usuario))
// const nome = "Diego";
// const idade = 23
// const mostrarUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade })
// console.log(mostrarUsuario(nome, idade))
// console.log(mostrarUsuario(nome))
// const promise = () => new Promise((resolve, reject) => resolve())
// 4º exercicio
// const empresa = {
//     nome: 'Rocketseat',
//     endereco : {
//         cidade: 'Rio do Sul',
//         estado: 'SC'
//     }
// }
// const {nome, endereco: { cidade, estado }} = empresa
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
// function mostraInfo({nome, idade}) {  
//     return `${nome} tem ${idade} anos.`;
// }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
// 5º exercício
// const arr = [1,2,3,4,5,6]
// const [x , ...y] = arr
// console.log(x)
// console.log(y)
// function soma (...elements) {
//     return elements.reduce((acc, next) => acc + next) 
// }
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2));  // 3
// const usuario = {  nome: 'Diego',  idade: 23,  endereco: {    cidade: 'Rio do Sul',    uf: 'SC',    pais: 'Brasil',  }};
// const usuario2 = {
//     nome: 'Diego',
//     ...usuario
// }
// console.log(usuario2)
// const {nome, idade, endereco} = usuario
// const {endereco: {uf, pais}} = usuario
// const usuario2 = {
//     nome: 'Gabriel',
//     idade, endereco
// }
// console.log(usuario2)
// const usuario3 = {
//     nome, idade, endereco: {
//         cidade: 'lontras',
//         uf, pais
//     }
// }
// console.log(usuario3)
// 6º Exercício
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`)
// 7º Exercício
// const nome = 'Diego';
// const idade = 23;
// const usuario = {  nome,  idade,  cidade: 'Rio do Sul'}
// console.log(usuario)
"use strict";
