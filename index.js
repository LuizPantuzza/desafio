let nomeDoHeroi = 'Luiz'
let XPDoHeroi =  2001


if (XPDoHeroi <= 1000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Ferro.`)
} else if (XPDoHeroi > 1000 && XPDoHeroi <= 2000){
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Bronze.`)
}else if (XPDoHeroi > 2000 && XPDoHeroi <= 5000){
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Prata.`)
} else if (XPDoHeroi > 6000 && XPDoHeroi <= 7000){
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Ouro.`)
} else if (XPDoHeroi > 7000 && XPDoHeroi <= 8000){
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Platina.`)
} else if (XPDoHeroi > 8000 && XPDoHeroi <= 9000){
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Ascendente.`)
} else if (XPDoHeroi > 9000 && XPDoHeroi <= 10000){
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Imortal.`)
} else {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Radiante.`)
}
