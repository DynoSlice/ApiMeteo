const axios = require('axios');
var recuperationip = require('./location')
var token = require('./token')

async function Latitude(){
    const recuperationLatitude = await recuperationip.then(data => { return data.latitude}).catch(error =>{ console.log(error)})
    return recuperationLatitude
}

async function Longitude(){
    const recuperationLongitude = await recuperationip.then(data => { return data.longitude}).catch(error =>{ console.log(error)})
    return recuperationLongitude
}

async function ResultInsee(){
    const recuperationLatitude = await Latitude().then(data => { return data }).catch(error =>{ console.log(error)})
    const recuperationLongitude = await Longitude().then(data => { return data }).catch(error => { console.log(error)})
    let recuptoken = `${token.gettoken()}`
    return axios.get('https://api.meteo-concept.com/api/location/city?token=' + recuptoken + '&latlng=' + recuperationLatitude + ',' + recuperationLongitude).then(
        response =>{
            return response.data.city.insee
        }).catch(error =>{
            console.log(error)
        })
}

module.exports = ResultInsee()
