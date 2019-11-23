import axios from 'axios'
// Funão delay aciona o .then após 1s

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// export default async function umPorSegundo() {  
//     await delay()
//     console.log('1s')
//     await delay()
//     console.log('2s')
//     await delay()
//     console.log('3s')
// }

// export default async function getUserFromGithub(user) { 
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`)
//         console.log(response.data); 
//     } catch (error) {
//         console.log('Usuário não existe'); 
//     }
// } 

// export default class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`)
//             console.log(response.data);
//         } catch (err) {
//             console.log('Repositório não existe');
//         }
        
//     }
// }

export const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)
    } catch (error) {
        console.warn('Usuário não existe')
    }
}