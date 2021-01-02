function verificar() {

    let data = new Date();
    let anoAtual = data.getFullYear();
    let anoEntrada = document.getElementById("txtano").value;
    let res = document.getElementById("res");
    let tipoPessoa;
    let gênero = '';


    if (anoEntrada.length == 0 || anoEntrada > anoAtual)
        alert("Verifique os dados e tente novamente!");

    var rsex = document.getElementsByName('radsex');


    let idade = anoAtual - parseInt(anoEntrada);

    if (rsex[0].checked) {
        gênero = " homem";
    }
    else {
        gênero = "a mulher";
    }

    if (idade < 12)
        tipoPessoa = "criança";
    else if (idade < 18)
        tipoPessoa = "adolescente";
    else if (idade < 60) {


        if (rsex[0].checked) {
            tipoPessoa = "adulto";
        }
        else {
            tipoPessoa = "adulta";
        }
    }
    else {
        if (rsex[0].checked) {
            tipoPessoa = "idoso";
        }
        else {
            tipoPessoa = "idosa";
        }
    }

    res.innerText = `Temos um${gênero}, ${tipoPessoa} de ${idade} anos de idade`;

}
