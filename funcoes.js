const filme = require("./filme");

 module.exports = {
     adicionarFilme: function (filme, catalogo) {
         catalogo.push(filme)
         return 'Filme adicionado com sucesso!'
     },

     buscarFilme: function (codigoFilme, catalogo) {
         for (let i = 0; i < catalogo.length; i++) {
             if (catalogo[i].codigo == codigoFilme) {
                 return catalogo[i]
             }
         }

     },

     alteraStatusEmCartaz: function(codigoFilme, catalogo){
        const filme = this.buscarFilme(codigoFilme, catalogo);
        filme.emCartaz = !filme.emCartaz;
     }

 };