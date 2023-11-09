require('dotenv').config()
const axios = require('axios')
//operador de desestruturação do JS
const { 
  APPID,
  Q,
  UNITS,
  MY_LANGUAGE,
  CNT,
  PROTOCOL,
  URL_BASE
} = process.env

const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${MY_LANGUAGE}&cnt=${CNT}`

//Utilize async/await para iterar sobre a coleção de previsões, exibindo temp_min, temp_max, humidity, description

const obterPrevisoes = async () => {
  // const data = (await axios.get(url)).data
  const { list } = (await axios.get(url)).data
  for(let previsao of list){
    const dt = new Date(+(previsao.dt) * 1000)
    console.log(`Data: ${dt.toLocaleTimeString()}`)
    console.log(`Temp min: ${previsao.main['temp_min']}`)
    console.log(`Temp max: ${previsao['main'].temp_max}`)
    console.log(`Humidity: ${previsao['main']['humidity']}`)
    console.log(`Desc: ${previsao['weather'][0]['description']}`)
    console.log('*****************************')
  }
}
obterPrevisoes()