
var biciCorsa = [
    {
        nome : 'graziella',
        peso : 55
    },

    {
        nome : 'montainbike',
        peso : 45
    },

    {
        nome : 'willer',
        peso : 65
    }
];

var pesoMin = biciCorsa[0];

for(var i = 0; i < biciCorsa.length; i++){
    if(biciCorsa[i].peso < pesoMin.peso){
        pesoMin = biciCorsa[i];
    }
}

console.log(pesoMin);
