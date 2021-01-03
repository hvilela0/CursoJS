let array = [];

function adicionar() {

    num = document.querySelector("input#txtnum");
    sel = document.querySelector("select#selres");
    if (num.value.length == 0) {
        alert("O campo de adição não pode ficar vazio!");
        return;
    }

    //verificar de 1 a 100
    if(num.value < 1 || num.value> 100){
        alert("Apenas números de 1 a 100");
        num.value = "";
        return;
    }
    
        if(array.indexOf(Number(num.value)) != -1){
            alert("Número repetido: não adicionado!");
            num.value = "";
            return;
        }

            

    let div3 = document.getElementById("div3");
    div3.innerHTML = '';

    sel.innerHTML += `<option>Valor ${num.value} adicionado.</option>`;

    array.push(Number(num.value));
    num.value = "";

    num.focus();

}

function finalizar() {

    let div3 = document.getElementById("div3");
    div3.innerHTML = '';

    if (array.length <= 0) return;


    let totalCad = 0;
    let maior = array[0];
    let menor = array[0];
    let soma = 0;
    let media = 0;


    for (let i = 0; i < array.length; i++) {
        soma += array[i];
        if (array[i] > maior)
            maior = array[i];
        if (array[i] < menor)
            menor = array[i];
    }

    totalCad = array.length;
    /*array.sort();
    maior = array[array.length-1];
    menor = array[0];*/
    media = soma / array.length;

    div3.innerHTML += `<p>Ao todo, temos ${totalCad} números cadastrados.</p>
                        <p>O maior valor informado foi o ${maior}.</p>
                        <p>O menor valor informado foi o ${menor}.</p>
                        <p>Somando todos os valores, temos: ${soma}.</p>
                        <p>A média dos valor digitados é: ${media.toFixed(2)}.</p>`;





}