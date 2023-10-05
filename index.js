//métodos utilitários sobre vetores(listas)
function mapear(lista, funcao){
  //produza uma lista
  //para cada elemento da lista recebida, use a função recebida para encontrar seu mapeamento
  const aux = []
  for (let i = 0; i < lista.length; i++){
    // const resultante = funcao(lista[i])
    // aux.push(resultante)
    aux.push(funcao(lista[i]))
  }
  return aux
}
const numeros = [1, 2, 3, 15]
//chamar a mapear, produzindo uma lista de booleanos: true para quem for multiplo de 3, false para quem não for
//use uma arrow function sem return e sem parênteses na lista de parâmetros
//adaptar para que, ao inves de mostrar booleano, mostre um texto: "Eh multiplo de tres" ou "Não eh multiplo de tres", incluir o valor, usando interpolação
//operador ternário: teste ? a : b
console.log(mapear(numeros, n => n % 3 === 0 ? `${n} é múltiplo de três` : `${n} não é múltiplo de três`))

//essa função mapear, já existe
console.log(numeros.map(n => n % 3 === 0 ? `${n} é múltiplo de três` : `${n} não é múltiplo de três`))

//dada a lista [1, 2, 3], produzir [1, 4, 9]
// const numeros = [1, 2, 3]
// const resultado = []
// for (let i = 0; i < numeros.length; i++){
//   resultado.push(numeros[i] * numeros[i])
// }
// console.log(resultado)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//quero apenas os nomes que começam com A
//declarativo
// const aux = nomes.filter(nome => nome.startsWith("A"))
// console.log(aux)
//imperativo
// const aux = []
// for (let i = 0; i < nomes.length; i++){
//   if (nomes[i].startsWith("A"))
//     aux.push(nomes[i])
// }
// console.log(aux)



//arrow functions
// const ehPar = n => n % 2 == 0
// const eAgoraV2 = n => ehPar(n)
// console.log(eAgoraV2(2))


// const eAgora = () => console.log ("?")
// console.log(eAgora())
// console.log(ehPar(2))
// const hello = () => {console.log("Oi")}
// hello()
// const hello2 = () => console.log("Oi")
// hello2()
// const dobro = (n) => {return n * 2}
// const dobroV2 = (n) => n * 2
// const dobroV3 = n => n * 2

//parâmetros de função com valores padrão
// let triplo = function(n = 5){
//   return n * 3
// }
// console.log(triplo(10))
// console.log(triplo())

//funções anônimas
//funções em js são cidadãs de primeira-classe
// const dobro = function(n){
//   return n * 2
// }
// console.log(dobro(2))


//jeito antigo mas ainda utilizado para definir funções em js
// function soma(a, b, c){
//   return a + b + c
// }
// console.log(soma(1, 2, 3))
// function soma(a, b){
//   console.log(a + b)
// }
// const res = soma(2, 3)
// console.log(res)
// function hello(){
//   console.log("Oi")
// }
// hello()

// function hello(nome){
//   console.log(`Oi, ${nome}`)
// }

// hello("João")

//métodos utilitários sobre vetores

// {"nome": "Yasmin"}
// {nome: "Yasmin", data: new Date()}

//coleções, vetores, listas
//declaração de lista
// v1 = []
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"
// console.log(v1.length)
// console.log(v1)
// for (let i = 0; i < v1.length; i++){
//   console.log(v1[i])
// }
//ArrayList

//não use ==, use apenas ===
//console.log([] == [])
// console.log([] == false)
// console.log(null == undefined)
// const teste1 = null
// const teste2 = undefined
// console.log(null == null)
// console.log(1 == [1])
//console.log(true == 1)
// console.log(1 == "1")
// console.log (1 === "1")
// console.log(1 == 1)
// console.log(1 === 1)
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

// let teste = true
// console.log(typeof(teste))
// teste = "abc"
// console.log(typeof(teste))
// //interpolação
// let nome = "Rodrigo"
// console.log("Meu nome é " + nome) //concatenação
// console.log(`Meu nome é ${nome}`)  //print(f'Meu nome é {nome}')
// console.log("Meu nome é ${nome}") //não funciona
// let a = 2, b = 3
// console.log(`${a} + ${b} = ${a + b}`)
// let resultado = `${a} + ${b} = ${a + b}`
// console.log(typeof(resultado))



// //razões pelas quais não queremos usar o var
// var idade = "18"
// console.log("Oi " + nome)
// if (idade >= 18){
//   let nome = "João" //hoist içamento
//   console.log("Sim, " + nome + ", você pode dirigir.")
// }
// console.log("Até mais, " + nome)


// var idade = 18; //lint (linter)
// var nome = "Ana"

// var linguagem = "Javascript" //String linguagem;
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java" //String linguagem;
// console.log("Aprendendo " + linguagem)

//deno, bun
//var (sabe que existe, mas nunca vai usar, bem antigo)4
// //ECMAScript
// var nome = "José"
// console.log(nome)
// nome = "José da Silva"

//let
// let a = 2
// let endereco = "Rua B, 56"
// let deMaior = true
// console.log(a, typeof(a), endereco, typeof(endereco), deMaior, typeof(deMaior))
// endereco = "Rua B, 57"
// console.log(endereco, typeof(endereco))

//java int a (sistema de tipos estático);
// javascript sistema de tipos dinâmico
// const nome = "José"
// console.log(nome)
// console.log(typeof(nome))
// //não pode nome = "José da Silva"
// const idade = 18
// console.log(idade, typeof(idade))
// const sobrenome = 'Silva'
// //char c = 'a'; String s = "a";
// console.log(sobrenome, typeof(sobrenome))