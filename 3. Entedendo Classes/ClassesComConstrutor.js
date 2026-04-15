// Como criar classes
// Classe é a definicao (modelo para criação) dos Objetos.
class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade) {
        //instacia os parametros (parametros=dentro das barras) pelo constructor
        //this.nome = 'Marcus'; //Este foi 1 exemplo que como instanciar direto pelo Construtor
        this.nome = nome; //esta linha vincula a posicao da linha 19 dentro do parenteses
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade; //definindo pelo construtor o valor do objeto definido na classe
    }
    //funcoes que estao dentro das classes sao chamadas de metodos
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)
    }
}

//Instância é um ocorrencia do objeto, ex: pessoa1, pessoa2, etc...
/*const pessoa1 = new Pessoa('Marcus', '36');
const pessoa2 = new Pessoa('Layza', '30');
pessoa2.descrever();
console.log(pessoa2);
*/
//4-Funcoes recebendo Objetos

function compararPessoas(p3, p4){
   if(p3.idade>p4.idade) return console.log(`${p3.nome} é mais velho`);  
   else if(p3.idade<p4.idade) return console.log(`${p4.nome} é mais velho`);
   else return console.log('As duas pessoas tem a mesma idade');
}

const pessoa3 = new Pessoa('Eloa', 5);
const pessoa4 = new Pessoa('Eloisa', 3);

compararPessoas(pessoa3,pessoa4);