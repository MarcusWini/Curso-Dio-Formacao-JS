//1 ------------Estrutura Basica de um objeto
// Objeto Literal
const pessoa = {
    nome: 'Vitor J Guerra',
    idade:25,

//3 -----------Criando Metodos para o Objeto 
// (uma funcao dentro de um objeto é um metodo)
    descrever: function(){
        console.log(`Terceiro Topico - Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.descrever()
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);
//2 ------------Editando Informações de um objeto
pessoa.altura = 1.69;
console.log(pessoa);

delete pessoa.idade;
console.log(pessoa);
pessoa.age='36'; 
//idade foi deletada nao podendo 
// ser acessada novamente, criamos outro atributo para substitui-la, atributo "age"

//4 Forma dinamica de acessar os atributos, forma dinamica
console.log('Aula 4 (Acessando da forma normal): '+pessoa.nome);
console.log('Aula 4 (Acessando da forma normal): '+pessoa['age']);


