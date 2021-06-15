
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

var zucchineMeno = [];

var zucchinePiu = [];



for(var i =0; i < zucchine.length; i++){
    if(zucchine[i].lunghezza < 15){
        zucchineMeno.push(zucchine[i]);
    } else{
        zucchinePiu.push(zucchine[i]);
    }
}



var sommaMeno = 0;

var sommaPiu = 0;

for(var i = 0; i < zucchineMeno.length; i++){
    sommaMeno += zucchineMeno[i].peso;
}

console.log(zucchineMeno);

console.log(sommaMeno);



for(var i = 0; i < zucchinePiu.length; i++){
    sommaPiu += zucchinePiu[i].peso;
}

console.log(zucchinePiu);

console.log(sommaPiu);

