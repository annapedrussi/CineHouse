const Filme = require('./filme');
const { buscarFilme } = require('./funcoes');
const funcoes = require('./funcoes');

const cinema = 'DH Movies';
console.log(cinema)

//console.log(new Filme(1, 'Harry Potter', 90, [], 2001, false ))

const catalogo = [];

funcoes.adicionarFilme(new Filme(1, 'Harry Potter', 90, ['Daniel Radclife'], 2001, false), catalogo)
funcoes.adicionarFilme(new Filme(2, 'Star Wars', 180, ['Jack Daniels'], 2001, false), catalogo)
funcoes.adicionarFilme(new Filme(3, 'Código de conduta', 120, ['Vin Diesel'], 2021, true), catalogo)
funcoes.adicionarFilme(new Filme(4, 'Animais Fantásticos', 90, ['zra Miller'], 2011, false), catalogo)
funcoes.adicionarFilme(new Filme(5, 'A culpa é das estrelas', 90, ['Denis Lovato'], 2020, true), catalogo)

console.log(catalogo);
console.log('o Filme encontrado foi: ' + funcoes.buscarFilme(3, catalogo).titulo);

funcoes.alteraStatusEmCartaz(1, catalogo)
console.log(funcoes.buscarFilme(1, catalogo))