
var zucchine = [
    {
        varieta : 'varietà1',
        peso : 1,
        lunghezza : 20
    },

    {
        varieta : 'varietà2',
        peso : 2,
        lunghezza : 10
    },

    {
        varieta : 'varietà3',
        peso : 0.50,
        lunghezza : 8
    },

    {
        varieta : 'varietà4',
        peso : 3,
        lunghezza : 25
    },

    {
        varieta : 'varietà5',
        peso : 0.70,
        lunghezza : 9
    },

    {
        varieta : 'varietà6',
        peso : 4,
        lunghezza : 30
    },

    {
        varieta : 'varietà7',
        peso : 1.5,
        lunghezza : 8.5
    },

    {
        varieta : 'varietà8',
        peso : 1,
        lunghezza : 10
    },

    {
        varieta : 'varietà9',
        peso : 2,
        lunghezza : 15
    },

    {
        varieta : 'varietà10',
        peso : 5,
        lunghezza : 35
    },
];

var somma = 0;

for(var i = 0; i < zucchine.length; i++){
    somma += zucchine[i].peso;
}

console.log(somma);
