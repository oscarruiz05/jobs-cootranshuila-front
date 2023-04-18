import axios from "axios";

const getCategories = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_API_URL}/categories`)
        .then(resp => {
            resolve(resp.data.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

const getAgencies = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_API_URL}/agencies`)
        .then(resp => {
            resolve(resp.data.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export default {
    getCategories,
    getAgencies,
}

// const geToken = (client_id, client_secret) => {
//     return new Promise((resolve, reject) => {
//         const headers = {
//           'Authorization': `Basic ${btoa(client_id + ":" + client_secret)}`
//         }
//         axios.post(`${import.meta.env.VITE_API_URL_TOKEN}/token`, 'grant_type=client_credentials', {
//           headers: headers,
//         })
//         .then(resp => {
//             resolve(resp.data)
//         })
//         .catch(error => {
//             reject(error)
//         })
//     })
// }