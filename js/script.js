// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
$(document).ready(function() {
    var studente = {
        'nome': 'Pino',
        'cognome': 'Rossi',
        'eta': 20,
    };

    // console.log(studente);

    // Stampare a schermo attraverso il for in tutte le proprietà.

    for ( var k in studente) {
        console.log(studente[k]);
    }

    // - Creare un array di oggetti di studenti.

    var studenti = [
        {
            'nome': 'Pino',
            'cognome': 'Rossi',
            'eta': 20,

        },

        {
            'nome': 'Pina',
            'cognome': 'Bianchi',
            'eta': 30,

        },

        {
            'nome': 'Pinuccio',
            'cognome': 'Rossini',
            'eta': 25,

        }
    ];

    // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
    // inserendo nell’ordine: nome, cognome e età

    var nome = prompt('inserisci il nome');
    var cognome = prompt('inserisci il cognome');
    var eta = parseInt(prompt('inserisci età'));

    var nuovoStudente = {
        'nome' : nome,
        'cognome' : cognome,
        'eta' : eta
    };

    studenti.push(nuovoStudente);
    // console.log(studenti);

    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.


    for (var i = 0; i < studenti.length; i++) {
        var student = studenti[i]

        var source = $('#entry-template').html();
        var template = Handlebars.compile(source);

        var html =  template(student);

        $('#stud').append(html);
        // console.log(studenti[i].nome + '  ' + studenti[i].cognome);
    };



});
