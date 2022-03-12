const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8750a1c994a2b7eaf043fa2ec9e00cf5&query='+latitude+','+longitude

    request({ url, json: true}, (error,{body}) =>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently "+ body.current.temperature+ " degrees out. It feels like " + body.current.feelslike + " degrees out")
        }
    })
}

module.exports =forecast

