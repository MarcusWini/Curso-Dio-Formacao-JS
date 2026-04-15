
//[10, 7, 10, 10, 7, 5]
function calculaMedia(){
const nota = [10, 7, 10, 10, 7, 5];
let soma =0;
let media =0;

for (let index = 0; index < nota.length; index++) {
soma = soma + nota[index];    
//console.log(nota[index]);
//console.log(soma);
}
media = soma/nota.length;
return media;
};


function mostraMedia(status){
    console.log(status);
};

module.exports = { calculaMedia, mostraMedia};