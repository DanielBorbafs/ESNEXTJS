// Spread com Objeto
const funcionario = { nome: 'Maria', salario: 1235.48}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Spread com array = Adcionando Elementos no array
const GrupoA = ['Joao', 'Maria', 'Daniel']
const GrupoFinal = ['Larissa',...GrupoA, 'Rafaela']
console.log(GrupoFinal)


// arrow Function
//Sintaxe reduzida
const soma = (a , b) => a + b 
console.log(soma(2, 3))

const soma2 = (a , b) => {
    return a +b 
}  
console.log(soma(2, 3))
// sempre vai ser uma função Anonima.

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
lexico1()

//parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n )
    return total
}
console.log(total(3, 2, 4,))

// let e const
//bloco
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)


// template STRING
const produto = 'Ipad'
console.log(`${produto} é caro`)

// Destructuring - desestruturando váriaveis, arrays e etc..
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x,y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade , nome)
