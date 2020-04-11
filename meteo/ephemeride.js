const axios = require('axios');
var insee = require('../config/insee')
var token = require('../config/token')

async function RecuperationInsee(){
    const recupInsee = await insee.then(data =>{ return data  }).catch(error =>{ console.log(error)})
    return recupInsee
}

async function ephemeride(){
    const recupinsee = await RecuperationInsee().then(data => { return data  }).catch(error =>{ console.log(error) })
    let recuptoken = `${token.gettoken()}`
    return axios.get('https://api.meteo-concept.com/api/ephemeride/0?token=' + recuptoken + '&insee=' + recupinsee).then(
        response =>{
            console.log(response.data)
            return response.data
        }).catch(error => {
            console.log(error)
        })
}

module.exports = ephemeride()