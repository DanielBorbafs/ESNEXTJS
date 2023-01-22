const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Palmeiras').add('Barcelona')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
// Não aceita repetição

console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

