require('dotenv').config()
const axios = require('axios')

// const APPID = process.env.APPID
// const Q = process.env.Q
// const UNITS = process.env.UNITS
// const LANGUAGE = process.env.LANGUAGE
// const CNT = process.env.CNT
// const PROTOCOL = process.env.PROTOCOL
// const URL_BASE = process.env.URL_BASE

//operador de desestruturação do JS
const { 
  APPID,
  Q,
  UNITS,
  LANGUAGE,
  CNT,
  PROTOCOL,
  URL_BASE
} = process.env

//https://api.openweathermap.org/data/2.5/forecast?q=Itu&units=metric&appid=chave&lang=pt_br&cnt=10

const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${LANGUAGE}&cnt=${CNT}`
console.log(url)

const minhaPromise = axios.get(url)

minhaPromise
.then((res) => {
  console.log ("Quem é o res.data...")
  console.log(res.data)
  console.log("****************************")
  return res.data
})
.then((res) => {
  console.log("Quem é o cnt....")
  console.log(res.cnt)
  console.log("****************************")
  return res
})
.then((res) => {
  console.log("Quem é o list...")
  console.log(res.list)
  console.log("****************************")
  return res.list
})
.then((res) => {
  //desafio: exibir a temperatura minima da primeira previsão de tempo
  //dicas:
  //acessar a coleção na posição 0
  //depois acessar a propriedade temp_min
  console.log(res[0].main['temp_min'])
  return res
})
.then((previsoes) => {
  //desafio para a aula do dia 09/11
  //o professor vai olhar o caderno
  //iterar sobre a coleção de previsões, exibindo temperatura minima, maxima, umidade relativa do ar, descrição de cada previsão
  // for..
  for (let previsao of previsoes){
    console.log('*************************')
    console.log(`Temp min: ${previsao.main.temp_min}`)
    console.log(`Temp max: ${previsao.main.temp_max}`)
    console.log(`Umidade: ${previsao.main.humidity}`)
    console.log(`Desc: ${previsao.weather[0].description}`)
  }
})
// .then(res => console.log(res))

//async/await


