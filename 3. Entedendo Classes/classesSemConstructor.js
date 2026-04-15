// Como criar classes
// Classe é a definicao (modelo para criação) dos Objetos.
class Pessoa {
    nome;
    idade;

    //funcoes que estao dentro das classes sao chamadas de metodos
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)
    }
}

//Instância é um ocorrencia do objeto, ex: pessoa1, pessoa2, etc...
const pessoa1 = new Pessoa();
console.log(pessoa1);
 pessoa1.nome = 'Vitor J Guerra';
 pessoa1.idade = '25';
console.log(pessoa1);

const pessoa2 = new Pessoa();
 pessoa2.nome = 'Marcus W Reinisch';
 pessoa2.idade = '36';
console.log(pessoa2);

pessoa2.descrever();