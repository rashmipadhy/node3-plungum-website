const path = require('path')
const express = require('express')
const hbs = require('hbs')

//const geocode = require('./utils/geocode')
//const forecast = require('./utils/forecast')

const app = express()
//for heroku
const port = process.env.PORT || 5000
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup Handlebars engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//Setup route for index.hbs
app.get('',(req,res) => {
    res.render('index',{
        title:'plumgen',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})
app.get('/index',(req,res) => {
    res.render('index',{
        title:'plumgen',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})
app.get('/about',(req,res) => {
    res.render('about',{
        title:'About Plumgen',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})

/*app.get('/help',(req,res) => {
    res.render('help',{
        message: 'This is some helpful Text',
        title:'Store',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})*/
app.get('/stores',(req,res) => {
    res.render('about',{
        title:'Stores',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})
app.get('/lunch',(req,res) => {
    res.render('lunch',{
        title:'Lunch Menu',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})
app.get('/breakfast',(req,res) => {
    res.render('breakfast',{
        title:'breakfast Menu',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})
app.get('/dinner',(req,res) => {
    res.render('dinner',{
        title:'dinner Menu',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})
app.get('/ordernow',(req,res) => {
    res.render('ordernow',{
        title:'ordernow',
        name: '@2021 | Udiyate Technologies Pvt. Ltd. '
    })
})
/*app.get('/weather',(req,res) => {
    if(!req.query.address){
        return res.send({
            error:'you must provide an address'
        })
    }
  
    geocode(req.query.address, (error, {latitude,longitude,location} = {} ) => {
        if (error) {
            return res.send(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send(error)
            }

            res.send({
                forecast:forecastData,
                location,
                address:req.query.address

            })
        })
    })
})*/

/*app.get('/products',(req,res)=>{
    console.log(req.query)
    res.send({
        products:[]
    })
})*/

app.get('/help/*',(req,res) => {
    res.render('404',{
        errorMessage: 'Help article not found',
        title:'404',
        name: 'Rashmi & Chinmaya'
    })
})
app.get('*',(req,res) =>{
    res.render('404',{
        title:'404',
        name: 'Rashmi & Chinmaya',
        errorMessage:'Page not found'
    })
})
/*app.listen(3000,() => {
    console.log('Server is running on port 3000')
})*/
//for heroku
app.listen(port,() => {
    console.log('Server is running on port ' + port)
})
