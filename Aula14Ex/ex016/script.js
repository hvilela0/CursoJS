function contar() {
    let inicio  = document.getElementById("txtinicio").value;
    let fim     = document.getElementById("txtfim").value;
    let passo   = document.getElementById("txtpasso").value;

    let res = document.getElementById("resultado");

    res.innerText = "";

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0 || Number(passo) == 0){
        res.innerText = "Valores Inválidos!";
        return;
    }

    inicio  = Number(inicio);
    fim     = Number(fim);
    passo   = Number(passo);

    res.style.textAlign = "center";
    res.innerText = `\u{1F3C1} `;

    if (inicio <= fim) {

        
        for (let i = inicio; i <= fim; i += passo) {

            res.innerText += ` ${i} \u{1F449}`;
        }
        res.innerText += ` \u{1F3C1} `;
    }
    else {
        
        for (let i = inicio; i >= fim; i -= passo) {

            res.innerText += ` ${i} \u{1F449}`;
        }
        res.innerText += ` \u{1F3C1} `;
    }
}