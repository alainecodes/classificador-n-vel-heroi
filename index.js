let heroiNome = 'Alaine'
let heroiXP = 8999

if (heroiXP <= 1000) { // ADICIONADO '1000' à categoria
    nivel = 'Ferro'    
} else if (heroiXP > 1000 && heroiXP <= 2000) {
    nivel = 'Bronze'
} else if (heroiXP > 2000 && heroiXP <= 5000) {
    nivel = 'Prata'
} else if (heroiXP > 5000 && heroiXP <= 7000) { // ADICIONADO '5001 ~ 6000' à categoria
    nivel = 'Ouro'
} else if (heroiXP > 7000 && heroiXP <= 8000) {
    nivel = 'Platina'
} else if (heroiXP > 8000 && heroiXP <= 9000) {
    nivel = 'Ascendente'
} else if (heroiXP > 9000 && heroiXP <= 10000) {
    nivel = 'Imortal'
} else {
    nivel = 'Radiante'
}

console.log('O Herói de nome ' + heroiNome + ' está no nível de ' + nivel)