const {calculaMedia, mostraMedia} = require('./funcoesauxiliares-ex1')
//gets é onde pegamos as contas feitas;
//print é o nosso console.log

const media = calculaMedia();
const aluno = 'Marcus';

if (media < 5 && media > 0) return mostraMedia('O aluno ' +aluno+' foi Reprovado, pois sua media foi: '+calculaMedia().toFixed(2));
else if (media >=5 && media < 7) return mostraMedia('O aluno ' +aluno+' ficou de Recuperação, pois sua media foi: '+calculaMedia().toFixed(2));
else if (media >= 7 && media < 10) return mostraMedia('O aluno ' +aluno+' foi Aprovado, pois sua media foi: '+calculaMedia().toFixed(2));
else return mostraMedia('Algum valor do campo "notas" esta errado!');
