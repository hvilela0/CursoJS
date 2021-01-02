
function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");

    var data = new Date();
    var hora = 21;//data.getHours();

    var dia;

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/fotomanha.png';
        document.body.style.background = '#e2cd9f';
        dia = "Bom dia";

    }
    else if(hora >=12 && hora < 18){
        //Boa tarde
        img.src = 'img/fototarde.png'
        document.body.style.background = '#b9846f';
        dia = "Boa tarde";

    }
    else{
        //Boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#515154';
        dia = "Boa noite";
    }

    msg.innerHTML = `${dia}, agora ${(hora==1 || hora == 0)?'é':'são'}: ${hora} hora${(hora==1 || hora == 0)?'':'s'}`;
}