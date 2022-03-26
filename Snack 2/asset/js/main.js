let squadre = [
    {
        'nome': 'Real Madrid',
        'punti fatti': randomNumber(0,100),
        'falliSubiti': randomNumber(0,100)
    },
    {
        'nome': 'Barcelona',
        'puntiFatti': randomNumber(0,100),
        'falliSubiti': randomNumber(0,100)
    },
    {
        'nome': 'Manchester United',
        'puntiFatti': randomNumber(0,100),
        'falliSubiti': randomNumber(0,100)
    },
    {
        'nome': 'Juventus',
        'puntiFatti': randomNumber(0,100),
        'falliSubiti': randomNumber(0,100)
    },
    {
        'nome': 'Cheslea',
        'puntiFatti': randomNumber(0,100),
        'falliSubiti': randomNumber(0,100)
    },
    {
        'nome': 'Paris-Saint-German',
        'puntiFatti': randomNumber(0,100),
        'falliSubiti': randomNumber(0,100)
    },

];
let squadre2 = [];




for (let i = 0; i < squadre.length; i++) {
    let {nome, falliSubiti } = squadre[i];
    
    squadre2.push({
        'nome': nome,
        'falliSubiti': falliSubiti
    })
    
}
console.log(squadre2);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}