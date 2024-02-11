function Pokemon(nome, nivel) {
    this.nome = nome;
    this.nivel = nivel;
}

Pokemon.prototype.emitirSom = function () {
    console.log("Som Pokémon genérico");
};

Pokemon.prototype.apresentar = function () {
    console.log(`Eu sou ${this.nome} e estou no nível ${this.nivel}.`);
};

function Pikachu(nome, nivel) {
    const pokemon = new Pokemon(nome, nivel);
    pokemon.tipo = "Elétrico";
    pokemon.emitirSom = function () {
        console.log("Pika Pika!");
    };
    pokemon.apresentar = function () {
        console.log(`Eu sou ${this.nome}, um Pokémon do tipo ${this.tipo} e estou no nível ${this.nivel}.`);
    };
    return pokemon;
}

function Charmander(nome, nivel) {
    const pokemon = new Pokemon(nome, nivel);
    pokemon.tipo = "Fogo";
    pokemon.emitirSom = function () {
        console.log("Char Char!");
    };
    pokemon.apresentar = function () {
        console.log(`Eu sou ${this.nome}, um Pokémon do tipo ${this.tipo} e estou no nível ${this.nivel}.`);
    };
    return pokemon;
}

function Mew(nome, nivel) {
    const pokemon = new Pokemon(nome, nivel);
    pokemon.tipo = "Lendário";
    pokemon.emitirSom = function () {
        console.log("Não sei o som do Mew");
    };
    pokemon.apresentar = function () {
        console.log(`Eu sou ${this.nome}, um Pokémon do tipo ${this.tipo} e estou no nível ${this.nivel}.`);
    };
    return pokemon;
}

const pokemonGenerico = new Pokemon("Pokémon Genérico", 5);
const pikachu = new Pikachu("Pikachu", 10);
const charmander = new Charmander("Charmander", 8);
const mew = new Mew("Mew", 12); 

// Apresentação e sons
pokemonGenerico.apresentar();
pokemonGenerico.emitirSom();

pikachu.apresentar();
pikachu.emitirSom();

charmander.apresentar();
charmander.emitirSom();

mew.apresentar();
mew.emitirSom(); 
