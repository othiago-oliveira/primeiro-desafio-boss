let nomeDeHeroi = "Arthas"
let xpDeHeroi = 4596
let nivel = ""

if (xpDeHeroi <= 1000) {
    nivel = "Ferro"
} else if (xpDeHeroi <= 2000) {
    nivel = "Bronze"
} else if (xpDeHeroi <= 5000) {
    nivel = "Prata"
} else if (xpDeHeroi <= 7000) {
    nivel = "Ouro"
} else if (xpDeHeroi <= 8000) {
    nivel = "Platina"
} else if (xpDeHeroi <= 9000) {
    nivel = "Ascendente"
} else if (xpDeHeroi <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeDeHeroi + " está no nível de " + nivel)
console.log(`O Herói de nome ${nomeDeHeroi} está no nível de ${nivel}`)
