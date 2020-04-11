let express = require('express')
let app = express()
let moment = require('./config/moment')
let meteoJour = require('./meteo/previsionJour')
let jour = require('./meteo/dateJour')
var bodyParser = require('body-parser')

//Moteur de template ejs
app.set('view engine', 'ejs')
//Lien pour le dossier public 
app.use('/assets',express.static('public'))

app.use(bodyParser.json());   
//Route
app.get('/', async (request, response, next) =>{
    const meteo = await meteoJour.then(data => {response.render('pages/index', {data: data})}).catch(error => {console.log(error)})
})

app.listen(8000)