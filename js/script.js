// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti
// gli studenti e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.

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
