let dataHoje = new Date()
let dataEvento = new Date(2022, 3, 16)

console.log(dataHoje)
console.log(dataEvento)

if (dataEvento < dataHoje) {
    console.log("O evento já passou")
} else {
    console.log("O evento ainda não aconteceu")
}

let idadeLimiteinscricao = 18
let idadePartiicipante = 15

if (idadePartiicipante => idadeLimiteinscricao) {
    console.log("Inscrição Permitida= Insira o nome de um novo participante")
} else {
    console.log("Idade não permitida para inscrição")
}

let limiteParticipante = 100
let totalInscricao = 10

if (totalInscricao < limiteParticipante) {
    console.log("Ainda há vagas disponíveis= Insira um novo participante")
} else {
    console.log("Número máximo de participantes atingido")
}

