// import axios from 'axios'
import { buscaUsuario } from './exercicios/exercicio3'
// import ClasseUsuario , { idade as IdadeUsuario } from './functions' 
// ClasseUsuario.info()
// // alert('testando')
// console.log(IdadeUsuario)

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ok')
//     }, 2000)
// })

// async function executaPromise() {
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
// }

// executaPromise()

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`)
//             console.log(response)
//         } catch (err) {
//             console.warn('Erro na API: ', err)
//         }
//     }
// }

// Api.getUserInfo('65zxczxc4654')

// console.log('oi')

buscaUsuario('Paul17')
