let num = [];

num[0] = '@';
num[2] = '0';
num[4] = 'numero 4';
num.push('fim');
num.push('fim2');
num.push('fim3');

num.sort();
/*
for(let i=0;i<num.length;i++)    
    if(num[i] != undefined) // exclui itens vazios
        console.log(num[i]);

// mostra todo o vetor
console.log(num);*/

//uso do FOR IN
for(let i in num){
    console.log(num[i]);
}

// Uso do IndexOf()
console.log('indice de fim2: ' + num.indexOf('fim2'));
if(num.indexOf('qwerty')== -1)
    console.log('valor nao encontrado');