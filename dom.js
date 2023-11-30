
//TRACCIA 1//


/*let persona = {

    nome: "Alessio",

    cognome: "Giannoccaro",

    età: "34",

    saluta: function () {

        console.log("Ti saluta il tuo caro amico " + this.nome);

    }

};

persona.saluta();*/


//TRACCIA 2//

let agenda = {

    "id": "1",

    "nome": "Mario",

    "numero": "111111111",

    utente: [{

        nome: Danilo,

        telefono: 3333333,

        indirizzo: "Via Uno 5",

        cambiaNomeAgenda: function (nuovoNome) {

            this.nome = nuovoNome
    
        },
    
        aggiungiElemento: function (contenuto) {
    
            this.utente.push(contenuto)
        }

    },]

    
};

//console.log(agenda.nome);

//agenda.nome = "Sono il nuovo proprietario Angelo"

//console.log(agenda.nome);

//agenda.marca = "Nokia"

//console.log(agemda.marca);

//console.log(Object.keys(agenda).length);

//agenda.cambiaNomeAgenda("Agenda di tuti")

//console.log(agenda.nome);

agenda.aggiungiElemento({

    nome: Franco,

    telefono: 4444444,

    indirizzo: "Via Zero 5",


})

console.log(agenda.utente);








