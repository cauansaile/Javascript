const heroi = {nome:"Cauan", poder :"voar", idade:18, energia:100}
const heroi2 = {nome:"Breno", poder:"correr", idade:27, velocidade:100}
const  heroi3 = {...heroi, ...heroi2}
console.log(heroi3)
