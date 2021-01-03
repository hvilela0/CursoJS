//declaração de objetos

let amigo = {
    nome:'Jose',
    sexo: 'M',
    peso: 85.4,
    idade:22,
    engordar(p){
        this.peso += p;
        return 0;
    }
};

console.log(amigo.nome);
console.log(amigo.peso);

amigo.engordar(3);
console.log(amigo.peso);