//classificador de nível do herói
let nomeHeroi = "Marianinha007"
let quantidadeDeXP = 23456
let nivel = ""
if (quantidadeDeXP <= 1000){
    nivel = "ferro"
}else if ((quantidadeDeXP >= 1001) && (quantidadeDeXP <= 2000)){
    nivel = "bronze"
}else if ((quantidadeDeXP >= 2001) && (quantidadeDeXP <= 5000)){
    nivel = "prata" 
}else if ((quantidadeDeXP >= 6001) && (quantidadeDeXP <= 7000)){
    nivel = "ouro"
}else if ((quantidadeDeXP >= 7001) && (quantidadeDeXP <= 8000)){
    nivel = "platina"
}else if ((quantidadeDeXP >= 8001) && (quantidadeDeXP <= 9000)){
    nivel = "ascendente"
}else if ((quantidadeDeXP >= 9001) && (quantidadeDeXP <= 10000)){
    nivel = "imortal"
}else {
   nivel = "radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel)