const axios = require('axios');

function RecuperationIP(){
    return axios.get('https://api.ipify.org').then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    });
}

async function RecuperationPosition(){
    const adresseIP = await RecuperationIP().then(data => { return data }).catch(error => { console.log(error) });
    return axios.get('http://free.ipwhois.io/json/'+ adresseIP).then(response => {
        return response.data
    }).catch(error =>{
        return error
    });
}


module.exports = RecuperationPosition();