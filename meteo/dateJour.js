let moment = require('../config/moment')
const axios = require('axios');
var insee = require('../config/insee')
var token = require('../config/token')

async function RecuperationInsee(){
    const recupInsee = await insee.then(data =>{ return data  }).catch(error =>{ console.log(error)})
    return recupInsee
}

async function dateJour(){
    const recupinsee = await RecuperationInsee().then(data => { return data  }).catch(error =>{ console.log(error) })
    let recuptoken = `${token.gettoken()}`
    return axios.get('https://api.meteo-concept.com/api/forecast/daily/0?token=' + recuptoken + '&insee=' + recupinsee).then(
        response =>{
            return moment(response.data.forecast.datetime).format('LL')
        }).catch(error => {
            console.log(error)
        })
}

module.exports = dateJour()