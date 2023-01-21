// Spread com Objeto
const funcionario = { nome: 'Maria', salario: 1235.48}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Spread com array = Adcionando Elementos no array
const GrupoA = ['Joao', 'Maria', 'Daniel']
const GrupoFinal = ['Larissa',...GrupoA, 'Rafaela']
console.log(GrupoFinal)
